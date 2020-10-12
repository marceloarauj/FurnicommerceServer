const express = require('express')
const Routes = require('./app/configurations/routes')

const app = express()
const routes = new Routes();

routes.routes(app);

app.listen(3002, () => {
    console.log(`Servidor inicializado`)
})