const express = require('express')
const Routes = require('./app/configurations/routes')
const bodyParser = require('body-parser')

const app = express()
const routes = new Routes();

app.use(bodyParser.json({limit:'50mb'}))

routes.routes(app);

app.listen(process.env.PORT || 7000, () => {
    console.log(`Servidor inicializado`)
})