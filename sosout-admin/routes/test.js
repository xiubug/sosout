var express = require('express');
var router = express.Router();

var testDao = require('../dao/testDao');

// 响应资源
router.get('/', function(req, res, next) {
    res.send('响应资源');
});

// 增加
router.get('/addTest', function(req, res, next) {
    testDao.add(req, res, next);
});

// 更改
router.post('/updateUser', function(req, res, next) {
    testDao.update(req, res, next);
});

// 删除
router.get('/deleteUser', function(req, res, next) {
    testDao.delete(req, res, next);
});

// 查询
router.get('/query', function(req, res, next) {
    testDao.queryById(req, res, next);
});

// 查询全部
router.get('/queryAll', function(req, res, next) {
    testDao.queryAll(req, res, next);
});

module.exports = router;
