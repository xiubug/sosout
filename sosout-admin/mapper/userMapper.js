// SQL语句
var user = {
    goLogin: 'SELECT * FROM user WHERE user_name=? AND password=?',
    queryAll: 'SELECT * FROM user ORDER BY create_time DESC LIMIT ?, ?'
};

module.exports = user;