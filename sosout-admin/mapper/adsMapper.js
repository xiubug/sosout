// SQL语句
var ads = {
  queryAll: 'select * from ads order by create_time desc limit ?, ?',
  queryByType: 'select * from ads where type=? order by create_time desc limit ?, ?'
};

module.exports = ads;