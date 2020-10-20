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
                register = new LoginServices().register(request.body,response);

            }
        );

        app.route("/users").get(
            (request,response)=>{
                new LoginServices().getAll(response);
            }
        )
    }
}

module.exports = LoginController;