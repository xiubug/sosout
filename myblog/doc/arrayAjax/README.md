# ajax传递给后台数组参数方式
ajax传递给后台数组参数方式

### 引入jquery（按项目实际情况，我这边直接引入jquery）
```
<script src="./lib/jquery.min.js" type="text/javascript"></script>
```

### 实现代码
```
$(function() {
        var params = {
            name: 'admin',
            address: {
                province: '浙江',
                city: '杭州'
            },
            fids: [1, 2],
            friends: [{
                name: '张三',
                age: 10
            }, {
                name: '李四',
                age: 15
            }]
        };
        $.ajax({
            url: '后台接口地址',
            type: 'GET',
            data: $.param(serializeObjects(params)),
            traditional: true,
            success: function(result) {
                // 成功函数
            },
            error: function() {
                console.log('error');
            }
        });
        // 对参数进行特殊转化
        function serializeObjects(params) {
            var obj = {};
            for (var k in params) {
                var o = params[k];
                if ('[object Array]' === Object.prototype.toString.call(o))
                    for (var i = 0; i < o.length; i++) {
                        var o1 = o[i];
                        if ('[object Object]' === Object.prototype.toString.call(o1))
                            for (var k1 in o1) obj[(k + '[' + i + '].' + k1).toString()] = o1[k1];
                        else obj[(k + '[' + i + ']').toString()] = o1;
                    } else if ('[object Object]' === Object.prototype.toString.call(o))
                        for (var k2 in o) obj[(k + '.' + k2).toString()] = o[k2];
                    else obj[k.toString()] = o;
            }
            return obj;
        }
    })
```
