// APP开发路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');

module.exports.autoroute = {
    'get': {
        '/appdev': getIndex // 博客-APP开发
    }
};

// 博客-APP开发
function getIndex(req, res, next) {
    var appModel = new ModelProxy({});

    appModel.done(function(data) {
        res.render('appdev/index', {
            title: 'APP开发',
            router: 'appdev',
            pageData: data
        });
    }, function(err, html) {

    });
}
