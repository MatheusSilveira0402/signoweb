module.exports.layoutVote = function(application, req, res){
    
    const dadosform = req.body;
     
    const connection = application.config.connectiondb;

    var VotesDAO = new application.app.models.VotesDAO(connection);

    VotesDAO.findVotes(dadosform, res);

}

module.exports.voter = function(application, req, res){
    const dadosform = req.body;
    
    req.assert('vote','Primeira opção é campo obrigatório').notEmpty();

    const erros = req.validationErrors();

    if(erros){
		res.render("index", {validacao : erros,  cards : {}})
		return;
	}
    
    switch (dadosform.vote){
        case dadosform.dados[0]:
            this._op = 1;
        break;

        case dadosform.dados[1]:
            this._op = 2;
        break;

        case dadosform.dados[2]:
            this._op = 3;
        break;
        default:
            res.send('tente de novo');
    }

    const connection = application.config.connectiondb;

    var VotesDAO = new application.app.models.VotesDAO(connection);

    VotesDAO.countVoter(this._op, res, dadosform.id);

    

}

module.exports.registerVotes = function(application, req, res){
    
    const dadosform = req.body;
    

    req.assert('title','Titulo é um campo obrigatório').notEmpty();
    req.assert('op1','Primeira opção é campo obrigatório').notEmpty();
	req.assert('op2','Segunda opção é um campo obrigatório').notEmpty();
    req.assert('op3','Terceira opção é um campo obrigatório').notEmpty();
    req.assert('date_start','data de incio é um campo obrigatório').notEmpty();
    req.assert('date_end','data de termino é um campo obrigatório').notEmpty();
    

    const erros = req.validationErrors();

	if(erros){
		res.render("index", {validacao : erros,  cards : {}})
		return;
	}

    const connection = application.config.connectiondb;

    var VotesDAO = new application.app.models.VotesDAO(connection);

    VotesDAO.insertVotes(dadosform, res);

}