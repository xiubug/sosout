 // 描 述：判断是滚动到页面底部  
 function uiIsPageBottom() {
     var scrollTop = 0;
     var clientHeight = 0;
     var scrollHeight = 0;
     if (document.documentElement && document.documentElement.scrollTop) {
         scrollTop = document.documentElement.scrollTop;
     } else if (document.body) {
         scrollTop = document.body.scrollTop;
     }
     if (document.body.clientHeight && document.documentElement.clientHeight) {
         clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
     } else {
         clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
     }
     // 知识点：Math.max 比较大小，取最大值返回  
     scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
     return scrollTop + clientHeight >= scrollHeight - 70;
 }

 // 描 述：滚动300后右侧置顶  
 function blockRight() {
     var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
     var blockRight = $('#blockRight');
     if (t >= 300) { //判断
         $('#blockRight').css({
             "position": "fixed",
             "top": '0px',
             "right": "50%",
             "marginRight": "-590px"
         });
     } else {
         $('#blockRight').css({
             "position": "relative",
             "margin": "10px 0px",
             "right": "0px"
         });
     }
 }
