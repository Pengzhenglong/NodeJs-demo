
var express = require('express');
var router = express.Router();

var  dbConfig  = require('../db/dbconfig')
/* GET home page. */
router.get('/', function(req, res, next) {
  
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
});

module.exports = router;