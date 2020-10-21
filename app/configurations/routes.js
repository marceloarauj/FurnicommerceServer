const ListaController = require("../controllers/lista/lista_controller");
const LoginController = require("../controllers/login/login_controller");
const LoginController = require("../controllers/venda/venda_controller");

class Routes{

    routes(app){
        new LoginController(app);
        new ListaController(app);
        new VendaController(app);
    }
}
module.exports = Routes;