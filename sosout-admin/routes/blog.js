var express = require('express');
var router = express.Router();

var blogDao = require('../dao/blogDao');

// 查询全部
router.get('/blogList', function(req, res, next) {
    blogDao.blogList(req, res, next);
});

module.exports = router;
