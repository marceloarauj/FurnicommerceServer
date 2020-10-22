const LoginServices = require('./login_services');

class LoginController{

    constructor(app){
        this.routes(app);
    }

    routes(app){

        app.route("/login").post(
            (request,response)=>{

                new LoginServices().login(request.body,response);
            }
        );

        app.route("/register").post(
            (request,response)=>{
                new LoginServices().register(request.body,response);

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