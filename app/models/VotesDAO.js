
function VotesDAO(connection){
    this._connection = connection();
}

VotesDAO.prototype.findVotes = function(dados, res, req){
    const sql = "SELECT * FROM vote"
    this._connection.query(sql, function(err, results){
        results.forEach(row => {
            this._cards = [row]
        });


        

        if(this._cards){
            res.render("index", {validacao : {},  cards : this._cards})
        } else{
            res.render("index", {validacao : {},  cards : {}})
        }
    
    });


}

VotesDAO.prototype.insertVotes = function(dados, res){
    const sql = "INSERT INTO vote (title, option_1, option_2, option_3, nm_vote, nm_vote2, nm_vote3, date_start, date_end) VALUES (?,?,?,?,?,?,?,?,?);";
    const values = [dados.title, dados.op1, dados.op2, dados.op3, 0, 0, 0, dados.date_start, dados.date_end]
   

    this._connection.query(sql, values, function(err, results){
        if(this._cards){
            res.redirect("/");
        } else{
            res.redirect("/");
        }
    });
}


VotesDAO.prototype.countVoter = function(dados, res, id){
    switch (dados){
        case 1:
            const sql1 = "UPDATE vote SET nm_vote = nm_vote + 1 WHERE voteid = ?;";
            const where = id;
            this._connection.query(sql1, where, function(err, results){
            });
            res.redirect("/");
        break;
        case 2:
            const sql2 = "UPDATE vote SET nm_vote2 = nm_vote2 + 1 WHERE voteid = ?;";
            const where2 = id;
            this._connection.query(sql2, where2, function(err, results){
            });
            res.redirect("/");
        break;
        case 3:
            const sql3 = "UPDATE vote SET nm_vote3 = nm_vote3 + 1 WHERE voteid = ?;";
            const where3 = id;
            this._connection.query(sql3, where3, function(err, results){
            });
            res.redirect("/");
        break;
    }
}

module.exports = function(){
    return VotesDAO;
}