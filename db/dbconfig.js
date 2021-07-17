
var mysql = require('mysql');
module.exports={
  // 数据库配置
  config:{
  host: 'localhost',
  port: '3306',
  user: 'express',
  password: '123456',
  database: 'express'
},


// connection.connect();

// var sql = "select * from demo ";
// var  connect= connection.query(sql,function(err,rows,fields){
//      if(err)
//          console.log(err);
//      else{
//         console.log(rows);
//      }
// //记得关闭连接
// 　　 connection.end();
// });

sqlConnect:function(sql,sqlArr,callBack){
  var  pool= mysql.createPool(this.config)
  pool.getConnection((err,conn)=>{
    console.log('1234123')
    if(err){
      console.log('连接失败')
      return;
    }
    // 事件驱动回调
    conn.query(sql,sqlArr,callBack);
    // 释放连接
    conn.release();
  })
}
}