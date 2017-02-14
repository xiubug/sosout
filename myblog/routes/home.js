// 首页路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');
var render = require('./../render');
var StringUtils = require('./../public/js/lib/stringUtils');

module.exports.autoroute = {
    'get': {
        '/': getIndex // 博客-首页
    },
    'all': {
        '/home/common': getCommon // 博客-首页异步调用
    }
};

// 博客-首页
function getIndex(req, res, next) {
    var indexModel = new ModelProxy({
        recommendData: 'blog.recommend',
        blogList: 'recent.publish'
    });
    indexModel
        .recommendData()
        .blogList({ pageNum: 1, pageSize: 10 })
        .done(function(recommendData, blogList) {
            var pageData = {
                blogList: blogList,
                pageNum: 1
            };
            res.render('home/index', {
                title: 'Web开发，文章分享|技术求救号',
                router: '/',
                recommendData: recommendData,
                pageData: pageData,
                StringUtils: StringUtils
            });
        }, function(err, html) {
            render.renderHtml(err, html, res);
        });
}

// 博客-首页异步调用
function getCommon(req, res, next) {
    var indexModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    var params = Object.keys(req.params) > 0 ? req.params : req.body;
    indexModel
        .blogList({ pageNum: params.pageNum, pageSize: params.pageSize })
        .done(function(blogList) {
            var pageData = {
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
