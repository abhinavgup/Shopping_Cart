var mysql = require('mysql');



var obj = {
    host     : 'localhost',
    user     : 'root',
    password : '29233576',
    database : 'cart',
    port     : 'process.env.port || 3000;'
}

var connection = mysql.createConnection(obj);
connection.on('error', function (err) {
    console.log('caught this error: ' + err.toString());
});



function InsertintoDb(username, password, cb){
    // To insert data into the database => the data is val => which is the same as the data in input box
    try {
        connection.query(`Insert into user1 (username,password) Values('${username}', '${password}')`, function(error, results){
            if(error) throw error;
            cb();
        })
    }
   catch(e){
       console.log(e);
   }
}

function getfromDb(user, cb){
    connection.query(`Select password from user1 where username = '${user}'`, function(error, results){
        if(error) throw error;
        cb(results);
    })
}
// connection.connect()
module.exports = {
    connection: connection,
    InsertintoDb: InsertintoDb,
    getfromDb: getfromDb
}
