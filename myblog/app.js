var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var xtpl = require('xtpl');

var ModelProxy = require('modelproxy-copy');
// 初始化引入接口配置文件 (注意：初始化工作有且只有一次)
ModelProxy.init(path.join(__dirname, 'interface.json'));

var app = express();
var autoroute = require('express-autoroute');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'xtpl');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

autoroute(app, {
    throwErrors: false,
    logger: logger,
    routesDir: path.join(__dirname, 'routes')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(app.get('port'));

console.log("当前执行环境：" + process.env.NODE_ENV);
module.exports = app;
