/*
	用于放置全局变量
	引用方式：var config = require('xx/config');
*/

var host = {
    online: "http://jxy.com/"
    //子域名
};


var config = {
    "hostname": host.online,
    isDebug: process.env.NODE_ENV === "production" ? false : true,
    assets: host.assets + "/assets/",
    redisPort: 6379, // redis默认端口
    redisHost: "127.0.0.1", //本地
    "session_key": "session_id",
    "SECRET": "juxiangyou2.0_sessionId"
};

/* 指定线上引用哪一天的资源 */

config.buildVersion = "20170110";

/* 指定资源版本 */
config.buildVersion = "20161231";

/* 子域名管理  */
config.subDomain = {
    activity: host.activity
}

module.exports = config;
