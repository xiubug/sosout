/*
	用于将页面中模块使用到的css,js资源插入到渲染完成的html中，并使用合并请求的方式

	NOTE：不支持直接在页面上写js代码

	使用方式，参考如下：
	res.render("home/index",{title:"首页-博客"},function(err,html){
		render.renderHtml(err,html,res);
	});
*/

var fs = require('fs'),
	config = require("./config");

// 不需要合并的js列表
var excludeJs = ['jquery-1.11.1.min.js','personal-page.js'];

/*
	生成年月日前缀 最为引用资源的版本号
 */
function getBuildVersion(){
	
	if(config.buildVersion && config.buildVersion!=""){
		return config.buildVersion;
	}
	else{
		/* 遍历build文件夹 获取最新的资源 */
		return "20161110";
	}
	// var now = new Date();
	// var year = now.getFullYear().toString();
	// var month = now.getMonth()+1;
	// month = month < 10 ? ("0"+month) : month;
	// var date = now.getDate();
	// date = date < 10 ? ("0"+date) : date;
	// var hour = now.getHours();
	// hour = hour < 10 ? ("0"+hour) : hour;
	// return year+month+date+"-";
	
}


/* 
	说明：根据生成的资源索引文件 通过常规资源名 获取 带版本号的资源名引入到视图文件 
	参数：资源索引文件路径, 资源名(未带版本号)
*/
function getMapResourceName(resourceName){

	if(resourceName===""){
		return "";
	}
	var strRegex = "(.js|.css)$",
		newName = "",
		ext;

	var filePath = resourceName.indexOf("/")!==-1?
		(resourceName.substring(0,resourceName.lastIndexOf('/')+1)):"";
	var fileName = resourceName.indexOf("/")!==-1?
		(resourceName.substring(resourceName.lastIndexOf('/')+1)):resourceName;

	var re = new RegExp(strRegex);
	if (re.test(fileName.toLowerCase())){
		ext = fileName.indexOf(".js")!==-1?".js":".css"; //文件扩展名
		newName = filePath+fileName.replace('.js',"").replace('.css',"")+".min"+ext;
	}
	console.log(newName);
	return newName;
}

/* 
	说明：根据当前环境加载不同版本的资源 开发环境下加载未压缩版 其他环境下加载压缩版
	参数：待加载的资源列表(数组), 标记(js,css)
*/
function handleResourceFIles(filesArr){

	var newArr = [];
	filesArr.map(function(file){
		var newFileName = getMapResourceName(file);
		//config.isDebug 判断是否是开发环境 如果是开发环境则引用未压缩版
		config.isDebug && (newFileName = newFileName.replace('.min',''));
		return newArr.push(newFileName);
	})
	return newArr;
}

function renderHtml(error,html,res){
	console.log("isDebug:"+config.isDebug);
	if(config.isDebug){
		if(error){
			console.log(error);
		}
		res.write(html);
		res.end();
		return;
	}

	if(error){
		res.location('error');
	}

	var cssArray=[],jsArray=[],newHtml = html+"";

	// 指定css和js文件放置的路径
	// var cssLocation = "public/css",jsLocation="public/js";
	// 查找所有的script
	var jsExp = /<script(\s)*(type="text\/javascript")?(\s)*src=(\s)*\"(\w|\/|\.|-)*(\.)(js)\"(><\/script>)/g;
	var jsList = newHtml.match(jsExp);

	// 查找所有的css
	var cssExp = /<link(\s)*(rel=\"stylesheet\")?(\s)*(type=\"text\/css\")?(\s)*(href=\")(\w|\/|\.|-)*(\.)(css)\"(\s)*\/>/g;
	var cssList = newHtml.match(cssExp);

	// 解析script数组，根据数量长短进行资源合并的操作
	var jsHref = "";
	
	var sourExp = /(\/js\/)((\w|\/|\.|-)*\.js)\"/g;  //截取路径为 /js/xxxx/xx.js
	if(jsList){
		for (var i = 0; i < jsList.length; i++) {
			for (var j = excludeJs.length - 1; j >= 0; j--) {
				if(jsList[i].indexOf(excludeJs[j]) == -1){
					jsList[i].match(sourExp);
					if (jsArray.indexOf(RegExp.$2) == -1) jsArray.push(RegExp.$2);
					html = html.replace(jsList[i],'');
				}
			};
		};
	}
	
	//根据当前环境 替换为带版本号的资源
	jsArray = handleResourceFIles(jsArray);
	if(jsArray && jsArray.length > 0){
		// 合并的js文件路径
		jsHref = config.assets+getBuildVersion()+"/js/??"+jsArray.join(",");
	}

	// 解析link数组，进行资源合并
	var cssHref = "";
	
	var sourExp = /(\/css\/)((\w|\/|\.|-)*\.css)\"/g;  //截取路径为 /css/xxxx/xx.css
	if(cssList){
		for (var i = 0; i < cssList.length; i++) {
			cssList[i].match(sourExp);
			if (cssArray.indexOf(RegExp.$2) == -1) cssArray.push(RegExp.$2);
		};
	}

	//根据当前环境 替换为带版本号的资源
	cssArray = handleResourceFIles(cssArray);
	if(cssArray && cssArray.length > 0){
		// 合并的css文件路径
		cssHref = config.assets+getBuildVersion()+"/css/??"+cssArray.join(",");
	}
	
	var js,css;
	// 重新整合后的资源链接
	if(jsHref){
		js = '<script src="'+jsHref+'"></script>';
	}
	if(cssHref){
		css = '<link rel="stylesheet" type="text/css" href='+cssHref+' />';
	}
	
	
	// console.log(js+","+css);
	// 将html中检测出的link和script标签删除，进行重新拼接

	html = html.replace(cssExp,'').replace(/<\/head>/g,css+"</head>").replace(/<\/body>/g,js+"</body>");
	
	res.write(html);
	res.end();
}



exports.renderHtml = renderHtml;