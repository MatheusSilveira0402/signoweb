module.exports.authentication = function(application, req, res){
    res.render("login", {validacao : {}});
}

module.exports.authenticationError = function(application, req, res){
    res.render("loginError");
}

module.exports.authenticationUsers = function(application, req, res){


    const dadosform = req.body;


    req.assert('email','Email é campo obrigatório').notEmpty();
	req.assert('password','Senha é um campo obrigatório').notEmpty();


    const erros = req.validationErrors();

	if(erros){
		res.render("cadastro", {validacao : erros})
		return;
	}

    const connection = application.config.connectiondb;

    var UserDAO = new application.app.models.UsersDAO(connection);


    UserDAO.authentication(dadosform, res);

}
