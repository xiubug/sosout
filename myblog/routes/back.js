// 后端开发路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');

module.exports.autoroute = {
    'get': {
        '/back': getIndex // 博客-后端开发
    }
};

// 博客-后端开发
function getIndex(req, res, next) {
    var backModel = new ModelProxy({});

    backModel.done(function(data) {
        res.render('back/index', {
            title: '后端开发',
            router: 'back',
            pageData: data
        });
    }, function(err, html) {

    });
}
