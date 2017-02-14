// SQL语句
var blogRecommend = {
    queryAll: 'select * from blog_list order by create_time desc limit ?, ?',
    queryByType: 'select * from blog_list where type=? order by create_time desc limit ?, ?'
};

module.exports = blogRecommend;
