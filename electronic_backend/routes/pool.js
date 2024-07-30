var mysql=require('mysql');
var pool=mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'Dev321go',
    database:'electronice_db',
    connectionlimit:100,
    multipleStatements:true
})
module.exports=pool