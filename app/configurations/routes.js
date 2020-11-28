const ListaController     = require("../controllers/lista/lista_controller");
const LoginController     = require("../controllers/login/login_controller");
const VendaController     = require("../controllers/venda/venda_controller");
const RelatorioController = require("../controllers/relatorio/relatorio_controller");

class Routes{

    routes(app){
        new LoginController(app);
        new ListaController(app);
        new VendaController(app);
        new RelatorioController(app);
    }
}
module.exports = Routes;