var fs = require('fs');
var path = require('path');
var configDirPath = './interfaceConfig/';

var baseConfig = {}; 	//基础配置文件
var filesList = []; 	//配置文件列表
var configList = []; 	//配置数据json数组


filesList =  fs.readdirSync(configDirPath);

function readConfDir(files,callback){
	if(files.length === 0){
		console.log(' \033[31m 暂无接口配置文件 \033[39m\n');
		return;
	}
	/* 遍历每一个配置文件 */
	files.forEach(function(file,index){
		fs.stat(configDirPath+"/"+file,function(err,stat){
			if(stat.isDirectory()){
				return;
			}

			/* 读取文件内容 不读取基本配置文件*/
			readFileContent(file,index,callback);
		});
	});
}

/* 读取文件内容  判断格式是否正确 */
function readFileContent(file,index,callback){

	var config = fs.readFileSync(configDirPath+"/"+file,'utf8'),
		jsonList;

	try{
		jsonList = JSON.parse(config);

		//拼接配置文件 不拼接base.conf文件
		if(file.indexOf("base.conf")===-1) {
			configList = configList.concat(jsonList);
			logdone("read "+file+" done...");

			if(index === filesList.length-1){
				setTimeout(function(){
					callback && callback();
				},200);
			}
		}
	 	return jsonList;
	}
	catch(err) {
		logerror(config);
		logerror(err);
		process.exit(1);
	}
}

/* 生成配置文件 */
function writeFile(filename, data){
	fs.writeFileSync(filename,data,'utf8');
	logdone('interface.json生成成功');
}

function logdone(done){
	console.log(' \033[32m'+done+'\033[0m\n');
}
function logerror(err){
	console.log(' \033[31m'+err+'\033[39m\n');
}

readConfDir(filesList,function(){
	if(configList.length === 0){
		logerror('未获取任何接口配置数据');
		process.exit(1);
	}
	configList.forEach(function(config,index){
		/* 开发环境下统一配置为online */
		if(process.env.NODE_ENV === "production"){
			/* 测试线上mock运行 先注释 */
			// if(config.urls.online === "")
			// {
			// 	logerror(config);
			// 	logerror('当前为正式环境，但未配置正式接口地址')
			// 	process.exit(1);
			// }
			//config.status = "online";
		}
	});
	baseConfig = readFileContent("base.conf.json");
	baseConfig.interfaces = configList;
	
	writeFile('./interface.json',JSON.stringify(baseConfig));
});


