var express = require('express');
var router = express.Router();

var recommendDao = require('../dao/recommendDao');

// 查询全部
router.get('/queryAll', function(req, res, next) {
    recommendDao.queryAll(req, res, next);
});

module.exports = router;
