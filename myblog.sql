-- MySQL dump 10.13  Distrib 5.1.73, for redhat-linux-gnu (x86_64)
--
-- Host: localhost    Database: myblog
-- ------------------------------------------------------
-- Server version	5.1.73-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_list`
--

DROP TABLE IF EXISTS `blog_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_list`
--

LOCK TABLES `blog_list` WRITE;
/*!40000 ALTER TABLE `blog_list` DISABLE KEYS */;
INSERT INTO `blog_list` VALUES (1,'jquery ajax 向后台传递数组','jquery ajax 向后台传递数组,在ajax上传的时候需要把traditional设置为 true ','/images/201715.png','https://github.com/sosout/sosout/tree/master/myblog/doc/arrayAjax','2017-01-04 22:16:44','2017-01-04 22:16:48','Javascript',88,'front','/front'),(2,'使用PM2守护Nodejs命令行程序','pm2是nodejs的一个带有负载均衡功能的应用进程管理器的模块，类似有Supervisor，forever，用来进行进程管理。','/images/201701160030.png','https://github.com/sosout/sosout/tree/master/myblog/doc/pm2-daemon-node','2017-01-16 00:30:56','2017-01-16 00:31:00','PM2',109,'server','/server'),(3,'pm2开机自动启动','在使用pm2守护Nodejs程序中介绍过,今天发现服务器突然宕机(down机/当机/死机)，不过很快重启了.但是pm2的进程没启动,因此pm2所守护的程序不会重启.防止服务器宕机pm2守护进程不重启，我们需要将pm2设置为...','/images/201701170829.png','https://github.com/sosout/sosout/tree/master/myblog/doc/pm2-autostart','2017-01-17 08:29:45','2017-01-17 08:46:10','PM2',23,'server','/server'),(4,'React概述','从背景、优势、不足，应用场景等简要说明一下React','/images/201701172217.png','https://github.com/sosout/learn-react/tree/master/react-summary','2017-01-17 22:17:17','2017-01-17 22:17:38','React',22,'front','/front'),(5,'React-JSX 语法','JSX语法，像是在Javascript代码里直接写XML的语法，实质上这只是一个语法糖，每一个XML标签都会被JSX转换工具转换成纯Javascript代码，React官方推荐使用JSX，当然你想直接使用纯Javascript代码写也是可以的，只是使用JSX，组件的结构和组件之间的关系看上去更加清晰。','/images/201701180018.png','https://github.com/sosout/learn-react/tree/master/react-jsx','2017-01-18 00:07:47','2017-01-18 00:22:10','React',97,'front','/front'),(6,'React基本语法','React 中的属性和状态初看之下可以互相替代，但是在 React 的设计哲学中两者有着截然不同的使用方式和使用场景。接下来简单介绍下什么是属性的状态、两者的区别和联系以及如何正确使用属性和状态。','/images/201701192211.png','https://github.com/sosout/learn-react/tree/master/react-grammar','2017-01-19 22:10:48','2017-01-19 22:11:10','React',123,'front','/front'),(7,'Git - fatal: Unable to ...','今天我在用git提交项目的时候，在git add . 命令还未执行完毕，我就退出了，导致git init 或 git add . 或 git commit -m \"提交信息\" 都无法使用，都会提示：Git - fatal: Unable to create \'D:/_jobs/_projects/github/learn-react/.git/index.lock\': File exists.','/images/201701192301.png','https://github.com/sosout/sosout/tree/master/myblog/doc/git-index-lock','2017-01-19 23:01:02','2017-01-20 23:01:29','Git',5,'server','/server'),(8,'基于Vue.js1.0、Vue-Router...','基于Vue.js1.0、Vue-Router、webpack 和 iView实现的SPA框架后台管理系统模版','/images/201612120056.png','https://github.com/sosout/learn-vue/tree/master/vue-iview','2016-12-12 00:56:42','2016-12-12 00:56:42','Vue1.0',56,'cases','/cases'),(9,'移动端自适应方案','结合网易、淘宝移动端首页html元素上的font-size这个属性的思考与学习，讨论html5设计稿尺寸以及前端与设计之间协作流程的问题。','/images/201701202311.png','https://github.com/sosout/sosout/tree/master/myblog/doc/mobile-self-adapt','2017-01-20 23:11:18','2017-01-20 23:11:45','Css',34,'front','/front'),(10,'基于Vue.js1.0、Vue-Router...','基于Vue.js1.0、Vue-Router、webpack 和 vue-strap实现的SPA框架文档模版.','/images/201609082218.png','https://github.com/sosout/learn-vue/tree/master/vue-strap','2016-09-08 22:18:11','2016-09-08 22:18:45','Vue1.0',7,'cases','/cases'),(11,'基于vue1.0、vuex、vue-router...','基于vue1.0、vuex、vue-router和webpack实现的移动端SPA框架模版.','/images/201611152322.png','https://github.com/sosout/learn-vue/tree/master/vue-wap','2016-11-15 23:21:57','2016-11-15 23:22:16','Vue1.0',19,'cases','/cases'),(12,'基于vue2.0、vuex、....','基于vue2.0、vuex、vue-router和webpack实现的移动端SPA框架模版.','/images/201701311725.png','https://github.com/sosout/learn-vue/tree/master/vue2-wap','2017-01-31 17:24:44','2017-01-31 17:25:11','Vue2.0',67,'cases','/cases'),(13,'Android入门-Android Studio...','Android入门-Android Studio创建项目图解','/images/201608142300.png','http://www.jianshu.com/p/a779ba3bbea9','2016-08-14 23:00:33','2016-08-14 23:00:54','Android',119,'appdev','/appdev'),(14,'个人博客源码','基于NodeJS的前后端分离的思考与实践，使用技术： express + node + xtemplate + mockjs...','/images/201612312247.png','https://github.com/sosout/sosout','2016-12-31 22:47:09','2016-12-31 22:47:34','Nodejs',1122,'cases','/cases'),(15,'基于Bootstrap和AngularJS控制台','基于Bootstrap和AngularJS实现的SPA框架后台管理系统模版。之前公司的后台管理系统就是基于本套架构。','/images/201701052123.png','https://github.com/sosout/learn-angular/tree/master/ng-bootstrap','2017-01-05 21:23:34','2017-01-05 21:24:00','Angular1.0',2,'cases','/cases'),(16,'webpack中的filename 和chunkFilename','webpack中的filename 和chunkFilename','/images/201702202340.png','http://www.jianshu.com/p/d9ebab57bca1','2017-02-20 23:40:47','2017-02-20 23:41:00','Webpack',25,'front','/front');
/*!40000 ALTER TABLE `blog_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_recommend`
--

DROP TABLE IF EXISTS `blog_recommend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_recommend`
--

LOCK TABLES `blog_recommend` WRITE;
/*!40000 ALTER TABLE `blog_recommend` DISABLE KEYS */;
INSERT INTO `blog_recommend` VALUES (1,'移动开发事件','这里收集了许多移动端上遇到的各种坑与相对解决方案...',NULL,'https://github.com/sosout/mobilePit','2016-12-31 09:40:18','2016-12-31 09:40:23'),(2,'个人博客源码','基于NodeJS的前后端分离的思考与实践，使用技术： express + node + xtemplate + mockjs...',NULL,'https://github.com/sosout/sosout','2016-12-31 09:44:35','2016-12-31 09:44:39');
/*!40000 ALTER TABLE `blog_recommend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `name` varchar(21000) NOT NULL,
  `age` int(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'wch',26),(2,'wch',26),(3,'wch',26),(4,'wch',26),(5,'wch',26);
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-01 11:57:10
