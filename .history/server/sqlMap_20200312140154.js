// sql语句
var sqlMap = {
  admin: {
    select_name: 'select * from admin where userName = ?',
    select_password: 'select * from admin where passWord = ?'
  },
  allFruit: {
    query: 'select * from allFruit',
    delete: 'delete from allFruit where id = "${id}"',
    add: 'insert into allFruit(pic, title) values(?,?)'
  }
}

module.exports = sqlMap
