class LoginController{

    constructor(app){
        this.routes(app);
    }

    routes(app){
        app.route("/user").get(
            (request,response)=>{
                response.status(200).json({teste:"teste",abc:"asd"});
            }
        );
        app.route("/login").post(
            (request,response)=>{
    
            }
        );
    }
}

module.exports = LoginController;