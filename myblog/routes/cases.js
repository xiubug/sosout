// 经典案例路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');

module.exports.autoroute = {
    'get': {
        '/cases': getIndex // 博客-经典案例
    }
};

// 博客-经典案例
function getIndex(req, res, next) {
    var appModel = new ModelProxy({});

    appModel.done(function(data) {
        res.render('cases/index', {
            title: '经典案例',
            router: 'cases',
            pageData: data
        });
    }, function(err, html) {

    });
}
