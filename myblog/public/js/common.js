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
