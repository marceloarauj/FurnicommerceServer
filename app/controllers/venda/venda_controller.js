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

        app.route('/vendas').get(
            (request,response)=>{
                new VendaServices().obterTodos(response)
            }
        );
        app.route('/vendaUsuario').post(
            (request,response) =>{
                new VendaServices().obterVendasUsuario(response,request.body)
            }
        );
        app.route('/vendaId').post(
            (request,response) =>{
                new VendaServices().obterVendaPorId(request.body,response)
            }
        );
        app.route('/comprarMovel').post(
            (request,response) =>{
                new VendaServices().comprarMovel(request.body,response)
            }            
        )
    }
}
module.exports = VendaController;