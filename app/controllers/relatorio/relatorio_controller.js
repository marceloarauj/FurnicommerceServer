const RelatorioServices = require('./relatorio_services')

class RelatorioController{

    constructor(app){
        this.routes(app);
    }

    routes(app){
        app.route('/relatorios').get(
            (request,response)=>{
                response.status(200).json({'sucesso':'sucesso'})
            }
        );
    }
}
module.exports = RelatorioController;