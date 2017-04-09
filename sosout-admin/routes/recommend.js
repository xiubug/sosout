var express = require('express');
var router = express.Router();

var recommendDao = require('../dao/recommendDao');

// 博客-推荐列表
router.get('/queryAll', function(req, res, next) {
    recommendDao.queryAll(req, res, next);
});

module.exports = router;

