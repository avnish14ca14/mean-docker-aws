const express = require('express');

// var dbconnection = require('./dbconnection');
// var conn = dbconnection.conn;

const app = express();

app.get('/', (req, res) => {
    res.send('CentOS server lab');
    // conn.query('select * from userdetails', function(err, result){
    //     if(err) throw err;
    //     res.send(result);
    // });
});

app.listen(4000, () => {
    console.log('App listening on port 4000!');
});