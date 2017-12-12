// SQL语句
var user = {
    goLogin: 'SELECT id, user_name, name, email, avatar FROM user WHERE user_name=? AND password=?',
    queryAll: 'SELECT id, user_name, name, email, avatar FROM user ORDER BY create_time DESC LIMIT ?, ?',
    getUser: 'SELECT id, user_name, name, email, avatar FROM user WHERE id=?'
};

module.exports = user;