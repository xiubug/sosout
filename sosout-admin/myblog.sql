/*
Navicat MySQL Data Transfer

Source Server         : sosout
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : myblog

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2017-12-15 11:12:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ads
-- ----------------------------
DROP TABLE IF EXISTS `ads`;
CREATE TABLE `ads` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `href` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ads
-- ----------------------------
INSERT INTO `ads` VALUES ('1', '礼物还没买？捡漏不只1折圣诞奢礼', 'http://sosout.com/static/images/tb/home-ad1.jpg', null, '2017-12-15 11:00:48', '2017-12-15 11:01:31');
INSERT INTO `ads` VALUES ('2', 'CBD家具开仓大降价啦，只卖2999元', 'http://sosout.com/static/images/tb/home-ad2.jpg', null, '2017-12-14 11:00:53', '2017-12-15 11:01:35');
INSERT INTO `ads` VALUES ('3', '100%纯实木全场3折起环保无贴皮', 'http://sosout.com/static/images/tb/home-ad3.jpg', null, '2017-12-06 11:00:59', '2017-12-15 11:01:38');
INSERT INTO `ads` VALUES ('4', '每日坚果健康生活好味道自然来', 'http://sosout.com/static/images/tb/home-ad4.jpg', null, '2017-12-12 11:01:04', '2017-12-15 11:01:45');
INSERT INTO `ads` VALUES ('5', '值得逛好店一直在寻找的美鞋', 'http://sosout.com/static/images/tb/home-ad5.jpg', null, '2017-11-26 11:01:10', '2017-12-15 11:01:42');
INSERT INTO `ads` VALUES ('6', '鲜活人生乳此不同', 'http://sosout.com/static/images/tb/home-ad6.jpg', null, '2017-12-20 11:01:15', '2017-12-15 11:01:49');
INSERT INTO `ads` VALUES ('7', '聚划算大牌服饰折扣季15日0点开抢', 'http://sosout.com/static/images/tb/home-ad7.jpg', null, '2017-12-28 11:01:20', '2017-12-15 11:01:52');
INSERT INTO `ads` VALUES ('8', '家清好货抢不停2件9折', 'http://sosout.com/static/images/tb/home-ad8.jpg', null, '2017-11-30 11:01:25', '2017-12-15 11:01:55');

-- ----------------------------
-- Table structure for blog_list
-- ----------------------------
DROP TABLE IF EXISTS `blog_list`;
CREATE TABLE `blog_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `img_url` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `category` varchar(1000) NOT NULL,
  `views` int(11) NOT NULL,
  `type` varchar(10000) NOT NULL,
  `router` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_list
-- ----------------------------
INSERT INTO `blog_list` VALUES ('1', 'jquery ajax 向后台传递数组', 'jquery ajax 向后台传递数组,在ajax上传的时候需要把traditional设置为 true ', '/images/201715.png', 'https://github.com/sosout/sosout/tree/master/myblog/doc/arrayAjax', '2017-01-04 22:16:44', '2017-01-04 22:16:48', 'Javascript', '88', 'front', '/front');
INSERT INTO `blog_list` VALUES ('2', '使用PM2守护Nodejs命令行程序', 'pm2是nodejs的一个带有负载均衡功能的应用进程管理器的模块，类似有Supervisor，forever，用来进行进程管理。', '/images/201701160030.png', 'https://github.com/sosout/sosout/tree/master/myblog/doc/pm2-daemon-node', '2017-01-16 00:30:56', '2017-01-16 00:31:00', 'PM2', '109', 'server', '/server');
INSERT INTO `blog_list` VALUES ('3', 'pm2开机自动启动', '在使用pm2守护Nodejs程序中介绍过,今天发现服务器突然宕机(down机/当机/死机)，不过很快重启了.但是pm2的进程没启动,因此pm2所守护的程序不会重启.防止服务器宕机pm2守护进程不重启，我们需要将pm2设置为...', '/images/201701170829.png', 'https://github.com/sosout/sosout/tree/master/myblog/doc/pm2-autostart', '2017-01-17 08:29:45', '2017-01-17 08:46:10', 'PM2', '23', 'server', '/server');
INSERT INTO `blog_list` VALUES ('4', 'React概述', '从背景、优势、不足，应用场景等简要说明一下React', '/images/201701172217.png', 'https://github.com/sosout/learn-react/tree/master/react-summary', '2017-01-17 22:17:17', '2017-01-17 22:17:38', 'React', '22', 'front', '/front');
INSERT INTO `blog_list` VALUES ('5', 'React-JSX 语法', 'JSX语法，像是在Javascript代码里直接写XML的语法，实质上这只是一个语法糖，每一个XML标签都会被JSX转换工具转换成纯Javascript代码，React官方推荐使用JSX，当然你想直接使用纯Javascript代码写也是可以的，只是使用JSX，组件的结构和组件之间的关系看上去更加清晰。', '/images/201701180018.png', 'https://github.com/sosout/learn-react/tree/master/react-jsx', '2017-01-18 00:07:47', '2017-01-18 00:22:10', 'React', '97', 'front', '/front');
INSERT INTO `blog_list` VALUES ('6', 'React基本语法', 'React 中的属性和状态初看之下可以互相替代，但是在 React 的设计哲学中两者有着截然不同的使用方式和使用场景。接下来简单介绍下什么是属性的状态、两者的区别和联系以及如何正确使用属性和状态。', '/images/201701192211.png', 'https://github.com/sosout/learn-react/tree/master/react-grammar', '2017-01-19 22:10:48', '2017-01-19 22:11:10', 'React', '123', 'front', '/front');
INSERT INTO `blog_list` VALUES ('7', 'Git - fatal: Unable to ...', '今天我在用git提交项目的时候，在git add . 命令还未执行完毕，我就退出了，导致git init 或 git add . 或 git commit -m \"提交信息\" 都无法使用，都会提示：Git - fatal: Unable to create \'D:/_jobs/_projects/github/learn-react/.git/index.lock\': File exists.', '/images/201701192301.png', 'https://github.com/sosout/sosout/tree/master/myblog/doc/git-index-lock', '2017-01-19 23:01:02', '2017-01-20 23:01:29', 'Git', '5', 'server', '/server');
INSERT INTO `blog_list` VALUES ('8', '基于Vue.js1.0、Vue-Router...', '基于Vue.js1.0、Vue-Router、webpack 和 iView实现的SPA框架后台管理系统模版', '/images/201612120056.png', 'https://github.com/sosout/learn-vue/tree/master/vue-iview', '2016-12-12 00:56:42', '2016-12-12 00:56:42', 'Vue1.0', '56', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('9', '移动端自适应方案', '结合网易、淘宝移动端首页html元素上的font-size这个属性的思考与学习，讨论html5设计稿尺寸以及前端与设计之间协作流程的问题。', '/images/201701202311.png', 'https://github.com/sosout/sosout/tree/master/myblog/doc/mobile-self-adapt', '2017-01-20 23:11:18', '2017-01-20 23:11:45', 'Css', '34', 'front', '/front');
INSERT INTO `blog_list` VALUES ('10', '基于Vue.js1.0、Vue-Router...', '基于Vue.js1.0、Vue-Router、webpack 和 vue-strap实现的SPA框架文档模版.', '/images/201609082218.png', 'https://github.com/sosout/learn-vue/tree/master/vue-strap', '2016-09-08 22:18:11', '2016-09-08 22:18:45', 'Vue1.0', '7', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('11', '基于vue1.0、vuex、vue-router...', '基于vue1.0、vuex、vue-router和webpack实现的移动端SPA框架模版.', '/images/201611152322.png', 'https://github.com/sosout/learn-vue/tree/master/vue-wap', '2016-11-15 23:21:57', '2016-11-15 23:22:16', 'Vue1.0', '19', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('12', '基于vue2.0、vuex、....', '基于vue2.0、vuex、vue-router和webpack实现的移动端SPA框架模版.', '/images/201701311725.png', 'https://github.com/sosout/learn-vue/tree/master/vue2-wap', '2017-01-31 17:24:44', '2017-01-31 17:25:11', 'Vue2.0', '67', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('13', 'Android入门-Android Studio...', 'Android入门-Android Studio创建项目图解', '/images/201608142300.png', 'http://www.jianshu.com/p/a779ba3bbea9', '2016-08-14 23:00:33', '2016-08-14 23:00:54', 'Android', '119', 'appdev', '/appdev');
INSERT INTO `blog_list` VALUES ('14', '个人博客源码', '基于NodeJS的前后端分离的思考与实践，使用技术： express + node + xtemplate + mockjs...', '/images/201612312247.png', 'https://github.com/sosout/sosout', '2016-12-31 22:47:09', '2016-12-31 22:47:34', 'Nodejs', '1122', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('15', '基于Bootstrap和AngularJS控制台', '基于Bootstrap和AngularJS实现的SPA框架后台管理系统模版。之前公司的后台管理系统就是基于本套架构。', '/images/201701052123.png', 'https://github.com/sosout/learn-angular/tree/master/ng-bootstrap', '2017-01-05 21:23:34', '2017-01-05 21:24:00', 'Angular1.0', '2', 'cases', '/cases');
INSERT INTO `blog_list` VALUES ('16', 'webpack中的filename 和chunkFilename', 'webpack中的filename 和chunkFilename', '/images/201702202340.png', 'http://www.jianshu.com/p/d9ebab57bca1', '2017-02-20 23:40:47', '2017-02-20 23:41:00', 'Webpack', '25', 'front', '/front');

-- ----------------------------
-- Table structure for blog_recommend
-- ----------------------------
DROP TABLE IF EXISTS `blog_recommend`;
CREATE TABLE `blog_recommend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `img_url` varchar(1000) DEFAULT NULL,
  `link` varchar(1000) DEFAULT NULL,
  `create_time` datetime NOT NULL,
  `update_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_recommend
-- ----------------------------
INSERT INTO `blog_recommend` VALUES ('1', '移动开发事件', '这里收集了许多移动端上遇到的各种坑与相对解决方案...', null, 'https://github.com/sosout/mobilePit', '2016-12-31 09:40:18', '2016-12-31 09:40:23');
INSERT INTO `blog_recommend` VALUES ('2', '个人博客源码', '基于NodeJS的前后端分离的思考与实践，使用技术： express + node + xtemplate + mockjs...', null, 'https://github.com/sosout/sosout', '2016-12-31 09:44:35', '2016-12-31 09:44:39');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `name` varchar(21000) NOT NULL,
  `age` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', 'wch', '26');
INSERT INTO `test` VALUES ('2', 'wch', '26');
INSERT INTO `test` VALUES ('3', 'wch', '26');
INSERT INTO `test` VALUES ('4', 'wch', '26');
INSERT INTO `test` VALUES ('5', 'wch', '26');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'sosout', 'sosout', 'sosout', 'sosout@yeah.net', '2017-04-29 08:40:42', '1', 'http://blog.sosout.com/images/common/default.png');
INSERT INTO `user` VALUES ('2', 'zhangsan1', 'sosout', '张三1', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('3', 'lisi1', 'sosout', '李四1', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('4', 'lisi2', 'sosout', '李四2', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('5', 'lisi3', 'sosout', '李四3', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('6', 'zhangsan2', 'sosout', '张三2', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('7', 'lisi4', 'sosout', '李四4', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('8', 'zhangsan3', 'sosout', '张三3', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('9', 'lisi5', 'sosout', '李四5', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('10', 'zhangsan4', 'sosout', '张三4', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('11', 'lisi6', 'sosout', '李四6', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('12', 'zhangsan5', 'sosout', '张三5', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('13', 'lisi7', 'sosout', '李四7', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('14', 'zhangsan6', 'sosout', '张三6', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('15', 'lisi8', 'sosout', '李四8', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('16', 'zhangsan7', 'sosout', '张三7', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('17', 'lisi9', 'sosout', '李四9', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('18', 'zhangsan8', 'sosout', '张三8', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('19', 'lisi10', 'sosout', '李四10', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('20', 'zhangsan9', 'sosout', '张三9', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('21', 'lisi11', 'sosout', '李四11', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('22', 'zhangsan10', 'sosout', '张三10', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('23', 'lisi12', 'sosout', '李四12', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
INSERT INTO `user` VALUES ('24', 'zhangsan11', 'sosout', '张三11', 'zhangsan@yeah.net', '2017-04-27 08:40:42', '1', null);
INSERT INTO `user` VALUES ('25', 'lisi13', 'sosout', '李四13', 'lisi@yeah.net', '2017-04-27 08:40:43', '1', null);
