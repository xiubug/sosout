;
$(function() {
    var obj = new Object(),
        pageNum = 1;
    obj.IsGetData = false; //是否存在数据加载
    // 描 述：游缆器滚动事件  
    window.onscroll = function() {

        // 描 述：滚动300后右侧置顶  
        blockRight();
    }

    // 描 述：点击下一步按钮
    $('#loadMore').click(function() {
        getNextPage();
    });

    // 描 述：Ajax加载数据  
    function GetAjaxData() {
        var pageBox = $('#commonBlogList'),
            loadMore = $('#loadMore');
        pageNum++;
        obj.IsGetData = true;
        loadMore.text('数据加载中...');
        if (loadMore.hasClass('next-page')) loadMore.removeClass('next-page');
        $.ajax({
            url: '/appdev/common',
            type: 'POST',
            data: { pageNum: pageNum, pageSize: pageBox.data('pagesize'), xtpl: pageBox.data('pagextpl') },
            dataType: "html",
            success: function(data) {
                var dataObj = JSON.parse(data);
                if (dataObj.pageData.code == 0) {
                    if (dataObj.pageData.blogList.length > 0) {
                        pageBox.append(dataObj.html);
                        $('#loadMore').remove();
                    } else {
                        $('#loadMore').text('没有更多内容了');
                    }
                    if (dataObj.pageData.blogList.length == pageBox.data('pagesize')) {
                        obj.IsGetData = false;
                        $('#loadMore').click(function() {
                            getNextPage();
                        });
                    }
                }
            },
            error: function(err) {
                console.log(err);
            }
        })
    }

    // 获取下一页
    function getNextPage() {
        if (!obj.IsGetData) GetAjaxData();
    }
})
