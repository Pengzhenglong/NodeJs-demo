
var  dbConfig  = require('../db/dbconfig')
// 获取分类
getCate=(req,res)=>{
    // res.render('index', { title: 'Express' });
    var  sql='select  *  from  demo'
    var  sqlArr= []
    var   callBack  = (err,data)=>{
      if(err){
        console.log('连接出错了')
      }else{
        res.send({
          'list':data
        })
      }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
  }

module.exports={
  getCate
}