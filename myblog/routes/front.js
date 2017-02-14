// 前端开发路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');
var StringUtils = require('./../public/js/lib/stringUtils');

module.exports.autoroute = {
    'get': {
        '/front': getIndex // 博客-前端开发
    }
};

// 博客-前端开发
function getIndex(req, res, next) {
    var frontModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    frontModel
        .blogList({ type: 'front', pageNum: 1, pageSize: 10 })
        .done(function(blogList) {
            var pageData = {
                blogList: blogList,
                pageNum: 1
            };
            res.render('front/index', {
                title: '前端开发',
                router: 'front',
                pageData: pageData,
                StringUtils: StringUtils
            });
        }, function(err, html) {

        });
}
