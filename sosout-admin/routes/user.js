var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

// 用户登录
router.post('/login', function(req, res, next) {
    userDao.goLogin(req, res, next);
});

module.exports = router;
