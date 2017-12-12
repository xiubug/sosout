var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

// 用户登录
router.post('/login', function(req, res, next) {
    userDao.goLogin(req, res, next);
});

// 查询全部
router.get('/userList', function(req, res, next) {
    userDao.userList(req, res, next); // 用户列表
});

// 查询用户信息
router.get('/getUser', function(req, res, next) {
  userDao.getUser(req, res, next); // 用户信息
});
module.exports = router;
