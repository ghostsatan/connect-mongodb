var MongoClient = require('mongodb').MongoClient;

var DB_URL = "mongodb://localhost:27017/chm";

  

MongoClient.connect(DB_URL, function(error, db){

  console.log("连接成功");

  deleteData(db);

});

  
var MongoClient = require("mongodb").MongoClient;

var DB_URL = "mongodb://localhost:27017/chm";

  
//添加数据
function insertData(db)

{

  var devices = db.collection('vip');

  var data = [{"name":"node","age":22,"addr":"nb","addTime":new Date()},{"name":"java","age":26,"addr":"ab","addTime":new Date()}];

  devices.insert(data,function(error, result){

    if(error)

    {

      console.log('Error:'+ error);

    }else{

  

      console.log(result.result.n);

    }

    db.close();

  });

}
//删除数据
function deleteData(db)

{

  var devices = db.collection('vip');

  var data = {"name":"node"};

  devices.remove(data, function(error, result){

    if (error) {

      console.log('Error:'+ error);

    }else{

      console.log(result.result.n);

    }

    db.close();

  })

}
//查找数据
var mongodb = require('mongodb')

var MongoClient = require('mongodb').MongoClient;

var DB_CONN_STR = 'mongodb://localhost:27017/chm'; 

  

var selectData = function(db, callback) { 

 //连接到表 

 var collection = db.collection('vip');

 //查询数据

 var whereStr = {"name":'node'};

 collection.find(whereStr,function(error, cursor){

  cursor.each(function(error,doc){

    if(doc){

      //console.log(doc);

      if (doc.addTime) {

        console.log("addTime: "+doc.addTime);

      }

    }

  });

  

 });

  

}
//更新数据
function updateData(db)

{

  var devices = db.collection('vip');

  var whereData = {"name":"node"}

  var updateDat = {$set: {"age":26}}; //如果不用$set，替换整条数据

  devices.update(whereData, updateDat, function(error, result){

    if (error) {

      console.log('Error:'+ error);

    }else{

      console.log(result);

    }

    db.close();

  });

}
