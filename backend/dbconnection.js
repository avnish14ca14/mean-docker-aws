const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'avnishkumarkaushik1c.mylabserver.com',
    user: 'root',
    password: 'Kaushik1234#'
});

conn.connect(function(err){
    if(!err){
        console.log('Connected');
    }else{
        console.log(err);
    }
});