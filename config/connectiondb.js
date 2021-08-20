var mysql = require('mysql');

const conn = function connect(){
    
    const connection = mysql.createConnection({
      host: "localhost",
      user: "signoweb",
      password: "892365",
      database: "signoweb"
    });
    return connection;

}


module.exports = function(){
	return conn;
}