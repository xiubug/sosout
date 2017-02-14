# PM2
使用PM2守护Nodejs命令行程序。pm2是nodejs的一个带有负载均衡功能的应用进程管理器的模块，类似有Supervisor，forever，用来进行进程管理。

### 一、安装：
```js
npm install pm2 -g
```
### 二、启动：
```js
pm2 start app.js
pm2 start app.js --name my-api       #my-api为PM2进程名称
pm2 start app.js -i 0                #根据CPU核数启动进程个数
pm2 start app.js --watch             #实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload
```
### 三、查看进程：
```js
pm2 list
pm2 show 0 或者 # pm2 info 0         #查看进程详细信息，0为PM2进程id 
```
### 四、监控： 
```js
pm2 monit
```
### 五、停止：
```js
pm2 stop all                         #停止PM2列表中所有的进程
pm2 stop 0                           #停止PM2列表中进程为0的进程
```
### 六、重载：
```js
pm2 reload all                       #重载PM2列表中所有的进程
pm2 reload 0                         #重载PM2列表中进程为0的进程
```
### 七、重启：
```js
pm2 restart all                      #重启PM2列表中所有的进程
pm2 restart 0                        #重启PM2列表中进程为0的进程
```
### 八、删除PM2进程：
```js
pm2 delete 0                         #删除PM2列表中进程为0的进程
pm2 delete all                       #删除PM2列表中所有的进程
```
### 九、日志操作：
```js
pm2 logs [--raw]                     #Display all processes logs in streaming
pm2 flush                            #Empty all log file
pm2 reloadLogs                       #Reload all logs
```
### 十、升级PM2：
```js
npm install pm2@lastest -g           #安装最新的PM2版本
pm2 updatePM2                        #升级pm2
```
### 十一、更多命令参数请查看帮助：
```js
pm2 --help
```
### 十二、PM2目录结构：
* 1、默认的目录是：当前用于的家目录下的.pm2目录（此目录可以自定义，请参考：十三、自定义启动文件），详细信息如下：
```js
$HOME/.pm2                   #will contain all PM2 related files
$HOME/.pm2/logs              #will contain all applications logs
$HOME/.pm2/pids              #will contain all applications pids
$HOME/.pm2/pm2.log           #PM2 logs
$HOME/.pm2/pm2.pid           #PM2 pid
$HOME/.pm2/rpc.sock          #Socket file for remote commands
$HOME/.pm2/pub.sock          #Socket file for publishable events
$HOME/.pm2/conf.js           #PM2 Configuration
```
### 十三、自定义启动文件：
* 1、创建一个test.json的示例文件，格式如下：
```js
{
  "apps":
    {
      "name": "test",
      "cwd": "/data/wwwroot/nodejs",
      "script": "./test.sh",
      "exec_interpreter": "bash",
      "min_uptime": "60s",
      "max_restarts": 30,
      "exec_mode" : "cluster_mode",
      "error_file" : "./test-err.log",
      "out_file": "./test-out.log",
      "pid_file": "./test.pid"
      "watch": false
    }
}
```
* 2、参数说明：
```js
apps：json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
name：应用程序的名称
cwd：应用程序所在的目录
script：应用程序的脚本路径
exec_interpreter：应用程序的脚本类型，这里使用的shell，默认是nodejs
min_uptime：最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
max_restarts：设置应用程序异常退出重启的次数，默认15次（从0开始计数）
exec_mode：应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
error_file：自定义应用程序的错误日志文件
out_file：自定义应用程序日志文件
pid_file：自定义应用程序的pid文件
watch：是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
```
