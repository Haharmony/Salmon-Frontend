const mysql = require('mysql'); //Libreria importante npm i mysql

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'buffetabogados'
});

db.connect(function(err){
    if(err) throw err;
    console.log('DATABASE CONNECTED!!');
});

module.exports = db;