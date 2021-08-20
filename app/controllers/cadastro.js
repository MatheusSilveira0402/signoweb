module.exports.register = function(application, req, res){
    res.render("cadastro", {validacao : {}});    
}

module.exports.registerUsers = function(application, req, res){
    
    const dadosForm = req.body;

    req.assert('email','Email é campo obrigatório').notEmpty();
	req.assert('password','Senha é um campo obrigatório').notEmpty();


    const erros = req.validationErrors();

	if(erros){
		res.render("cadastro", {validacao : erros})
		return;
	}

    const connection = application.config.connectiondb;

    var UserDAO = new application.app.models.UsersDAO(connection);

    console.log(connection);

    UserDAO.insertUser(dadosForm);

    res.send("opa deu certo")



}