var test = {
	insert: 'insert info test(title, summary) values(?, ?)',
	update: 'update test set title=?, summary=? where id=?',
	delete: 'delete from test where id=?',
	queryById: 'select * from test where id=?',
	queryAll: 'select * from test'
};

module.exports = test;