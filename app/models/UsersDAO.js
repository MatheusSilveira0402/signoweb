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

UsersDAO.prototype.authentication = function(dados, res){
    
    const values = [dados.email, dados.password]

    const sql = 'SELECT email, senha FROM users WHERE email = ? and senha = ?';
    this._connection.query(sql, values, function(err, results){
        if(!results[0] == 0){
            res.render("index", {validacao : {}, cards : {}});
        } else{
            res.render("loginError")
        }   
        });

    

} 

module.exports = function(){
    
    return UsersDAO;
}