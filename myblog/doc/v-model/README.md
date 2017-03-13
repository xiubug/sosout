# Vue.js双向绑定的实现原理
2016年，vuejs可谓是大放异彩，以迅雷不及掩耳之势赶React超Angular，用惯jquery的我一下子被Vue开篇介绍的双向绑定给惊着了！一下子按捺不住好奇心，打算刨根究底，看看双向绑定到底是怎样实现的？
## 前言
>  发布者-订阅者模式(backbone.js): 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set('property', value)。

>  数据劫持(vue.js): 通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。（采用数据劫持结合发布者-订阅者模式的方式）

>  如果觉得不错的话，请star一下吧 😊

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
