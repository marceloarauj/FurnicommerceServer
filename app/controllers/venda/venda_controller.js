class VendaController{

    constructor(app){
        this.routes(app);
    }

    routes(app){

        app.route('/venda').post(
            (request,response)=>{

            }
        )
    }
}
module.exports = VendaController;