const mysql = require('mysql'); //Libreria importante npm i mysql

/*const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'buffetabogados'
});*/

/*const db = mysql.createConnection({
    host: '34.70.85.26',
    user: 'root',
    password: 'password',
    database: 'buffetabogados'
});


db.connect(function(err){
    if(err) throw err;
    console.log('DATABASE CONNECTED!!');
});
*/
const db = mysql.createConnection({
    host: '34.70.85.26',
    user: 'root',
    password: 'password',
    database: 'buffetabogados',
    port: '3306'
});

db.connect(function(err){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
});
/*
const db = mysql.createPool({
    connectionLimit : 100,
    host: '34.70.85.26',
    user: 'root',
    password: 'password',
    database: 'buffetabogados'
});

db.getConnection(function(err,connection){
    if (err) console.log("[mysql error]",err);
    console.log('DATABASE CONNECTED!');
    connection.release();
});*/
module.exports = db;