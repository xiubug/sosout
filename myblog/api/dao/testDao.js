// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/conf');
var $util = require('../util/util');
var $sql = require('../mapping/testSqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function(req, res, next, callback) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            // insert into test(id, title, summary) values(0, ?, ?);
            connection.query($sql.insert, [param.title, param.summary], function(err, result) {
                if (result) {
                    result = {
                        code: 0,
                        msg: '增加成功'
                    };
                } else if (typeof result === 'undefined') {
                    result = {
                        code: '1',
                        msg: '操作失败'
                    };
                }

                // 以json形式，把操作结果返回前台页面
                callback(result);

                // 释放连接
                connection.release();
            })
        })
    }
}
