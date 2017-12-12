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
            var param = req.body;
            connection.query($sql.goLogin, [param.username, param.password], function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    userList: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            var pageNum = parseInt(param.pageNum || 1);
            var end = parseInt(param.pageSize || 10); // 默认页数
            var start = (pageNum - 1) * end;
            if (req.query.type) { // 按条件查询
                connection.query($sql.queryByType, [param.type, start, end], function(err, result) {
                    jsonWrite(res, result);
                    connection.release();
                });
            } else {
                connection.query($sql.queryAll, [start, end], function(err, result) {
                    jsonWrite(res, result);
                    connection.release();
                });
            }
        });
    },
    getUser: function(req, res, next) {
      pool.getConnection(function(err, connection) {
        var param = req.query || req.params;
        var id = param.id;
        connection.query($sql.getUser, [id], function(err, result) {
          jsonWrite(res, result);
          connection.release();
        });
      })
    }
};
