const VendaServices = require("./venda_services");

class VendaController{

    constructor(app){
        this.routes(app);
    }

    routes(app){

        app.route('/venda').post(
            (request,response)=>{
                new VendaServices().novaVenda(request.body,response)
            }
        );

        app.route('/getVendas').get(
            (request,response)=>{
                new VendaServices().obterTodos(response)
            }
        );
    }
}
module.exports = VendaController;