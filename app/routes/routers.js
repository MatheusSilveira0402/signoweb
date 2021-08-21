module.exports = function(application){
    //rota da pagina home aqui
    application.get('/', function(req, res){
        application.app.controllers.home.layoutVote(application, req, res);
    });

    application.post('/criarvotacao', function(req, res){
        application.app.controllers.home.registerVotes(application, req, res);
    });
   
    application.post('/votar', function(req, res){
        application.app.controllers.home.voter(application, req, res);
    });


    //rota da pagina cadastro
    application.get('/cadastro', function(req, res){
        application.app.controllers.cadastro.register(application, req, res);
    });

    application.post('/cadastrar', function(req, res){
        application.app.controllers.cadastro.registerUsers(application, req, res);
    });



    //rota da pagina do login
    application.get('/login', function(req, res){
        application.app.controllers.login.authentication(application, req, res)
    });

    application.get('/loginerror', function(req, res){
        application.app.controllers.login.authenticationError(application, req, res)
    });

    application.post('/autenticar', function(req, res){
        application.app.controllers.login.authenticationUsers(application, req, res)
    });


}