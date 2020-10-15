const express = require('express')
const Routes = require('./app/configurations/routes')

const app = express()
const routes = new Routes();

routes.routes(app);

app.listen(8080, () => {
    console.log(`Servidor inicializado`)
})