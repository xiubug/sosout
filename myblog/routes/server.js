// 服务端运维路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');
var StringUtils = require('./../public/js/lib/stringUtils');

module.exports.autoroute = {
    'get': {
        '/server': getIndex // 博客-服务器运维
    }
};

// 博客-服务器运维
function getIndex(req, res, next) {
    var serverModel = new ModelProxy({
        blogList: 'recent.publish'
    });
    serverModel
        .blogList({ type: 'server', pageNum: 1, pageSize: 10 })
        .done(function(blogList) {
            var pageData = {
                blogList: blogList,
                pageNum: 1
            };
            res.render('server/index', {
                title: '服务器运维',
                router: 'server',
                pageData: pageData,
                StringUtils: StringUtils
            });
        }, function(err, html) {

        });
}
