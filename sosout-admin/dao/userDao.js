// 实现与MySQl交互
var mysql = require('mysql');
var $conf = require('../config/config');
var $util = require('../util/util');
var $sql = require('../mapper/userMapper');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-1',
            msg: '后台异常'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    goLogin: function(req, res, next) {
        pool.getConnection(function(err, connection) {
        	// 获取前台页面传过来的参数
            var param = req.query || req.params;
            connection.query($sql.goLogin, [param.username, param.password], function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
};
