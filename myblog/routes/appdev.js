// APP开发路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');
var StringUtils = require('./../public/js/lib/stringUtils');

module.exports.autoroute = {
    'get': {
        '/appdev': getIndex // 博客-APP开发
    },
    'all': {
        '/appdev/common': getCommon // 博客-APP开发异步调用
    }
};

// 博客-APP开发
function getIndex(req, res, next) {
    var appModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    appModel
        .blogList({ type: 'appdev', pageNum: 1, pageSize: 5 })
        .done(function(blogList) {
            var pageData = {
                blogList: blogList,
                pageNum: 1
            };
            res.render('appdev/index', {
                title: 'APP开发',
                router: 'appdev',
                pageData: pageData,
                StringUtils: StringUtils
            });
        }, function(err, html) {
            render.renderHtml(err, html, res);
        });
}

// 博客-APP开发异步调用
function getCommon(req, res, next) {
    var frontModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    var params = Object.keys(req.params) > 0 ? req.params : req.body;
    frontModel
        .blogList({ type: 'appdev', pageNum: params.pageNum, pageSize: params.pageSize })
        .done(function(blogList) {
            var pageData = {
                code: 0,
                blogList: blogList,
                pageNum: params.pageNum
            };
            if (params.xtpl) {
                res.render(params.xtpl, { pageData: pageData, StringUtils: StringUtils }, function(err, html) {
                    var _response = {
                        pageData: pageData,
                        html: html
                    };
                    res.json(_response);
                });
            } else {
                var _response = {
                    pageData: pageData
                };
                res.json(_response);
            }
        }, function(err) {
            var _response = {
                code: -1,
                pageData: '网络连接超时，请检查网络！'
            };
            res.json(_response);
        });
}
