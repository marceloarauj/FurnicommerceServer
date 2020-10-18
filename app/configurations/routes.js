const ListaController = require("../controllers/lista/lista_controller");
const LoginController = require("../controllers/login/login_controller");

class Routes{

    routes(app){
        new LoginController(app);
        new ListaController(app);
    }
}
module.exports = Routes;