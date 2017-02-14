;
$(function() {
    var obj = new Object(),
        pageNum = 0;
    obj.IsGetData = false; //是否存在数据加载
    // 描 述：游缆器滚动事件  
    window.onscroll = function() {

        // 描 述：滚动300后右侧置顶  
        blockRight();
        
        if (uiIsPageBottom() && !obj.IsGetData) {
            //状态;  
            obj.IsGetData = true;
            GetAjaxData();
        }
    }

    // 描 述：Ajax加载数据  
    function GetAjaxData() {
        var pageBox = $('#topRecommend');
        pageNum++;
        $.ajax({
            url: '/home/common',
            type: 'POST',
            data: { pageNum: pageNum, pageSize: pageBox.data('pagesize'), xtpl: pageBox.data('pagextpl') },
            dataType: "html",
            success: function(data) {
                console.log('获取数据');
                var dataObj = JSON.parse(data);
                if (dataObj.pageData.code == 0) {
                    if (dataObj.pageData.blogList.length > 0) pageBox.append(dataObj.html);
                    if (dataObj.pageData.blogList.length == pageBox.data('pagesize')) obj.IsGetData = false;
                }
            },
            error: function(err) {
                console.log(err);
            }
        })
    }
})
