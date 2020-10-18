const express = require('express')
const Routes = require('./app/configurations/routes')

const app = express()
const routes = new Routes();

routes.routes(app);

app.listen(process.env.PORT || 7000, () => {
    console.log(`Servidor inicializado`)
})