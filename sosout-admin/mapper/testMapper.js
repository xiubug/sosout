// SQL语句
var test = {
    insert: 'insert into test(id, name, age) values(0, ?, ?)',
    update: 'update test set name=?, age=? where id=?',
    delete: 'delete from test where id=?',
    queryById: 'select * from test where id=?',
    queryAll: 'select * from test'
};

module.exports = test;
