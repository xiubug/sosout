// 经典案例路由
var express = require('express');

var ModelProxy = require('modelproxy-copy');
var mocker = require('mockjs');
var fs = require('fs');
var StringUtils = require('./../public/js/lib/stringUtils');

module.exports.autoroute = {
    'get': {
        '/cases': getIndex // 博客-经典案例
    },
    'all': {
        '/cases/common': getCommon // 博客-经典案例异步调用
    }
};

// 博客-经典案例
function getIndex(req, res, next) {
    var caseModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    caseModel
        .blogList({ type: 'cases', pageNum: 1, pageSize: 5 })
        .done(function(blogList) {
            var pageData = {
                blogList: blogList,
                pageNum: 1
            };
            res.render('cases/index', {
                title: '经典案例',
                router: 'cases',
                pageData: pageData,
                StringUtils: StringUtils
            });
        }, function(err, html) {
            render.renderHtml(err, html, res);
        });
}

// 博客-经典案例异步调用
function getCommon(req, res, next) {
    var caseModel = new ModelProxy({
        blogList: 'recent.publish'
    });

    var params = Object.keys(req.params) > 0 ? req.params : req.body;
    caseModel
        .blogList({ type: 'cases', pageNum: params.pageNum, pageSize: params.pageSize })
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
