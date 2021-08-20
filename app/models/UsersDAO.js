const crypto = require("crypto");


function UsersDAO(connection){
    this._connection = connection();
}

UsersDAO.prototype.insertUser = function(dados){
    const sql = "INSERT INTO users (email, senha) VALUES (?,?);";
    const values = [dados.email, dados.password]

    console.log(sql, values);
    this._connection.query(sql, values);
}

module.exports = function(){
    
    return UsersDAO;
}