const LoginServices = require('./login_services');

class LoginController{

    constructor(app){
        this.routes(app);
    }

    routes(app){
        app.route("/login").get(
            (request,response)=>{

                login = new LoginServices().login(request.body);

                if(login){
                    response.status(200).send({teste:"te2ste",abc:"as2d"});
                }else{
                    response.status(400).send({"erro":"login ou senha incorretos"});
                }
            }
        );
        app.route("/register").post(
            (request,response)=>{
                register = new LoginServices().register(request.body);

                if(register){
                    response.status(200).send({"mensagem":"Cadastro Realizado com sucesso"});
                }else{
                    response.status(400).send({"erro":"Não foi possível realizar o cadastro"});                    
                }
            }
        );

        app.route("/users").get(
            (request,response)=>{
                var users = new LoginServices().getAll();
                console.log(users);
                response.status(200).json(users);
            }
        )
    }
}

module.exports = LoginController;