var express = require('express');
var router = express.Router();

var adsDao = require('../dao/adsDao');

// 查询全部
router.get('/list', function(req, res, next) {
  adsDao.adsList(req, res, next); // 广告列表
});

module.exports = router;
