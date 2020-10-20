const express = require('express')
const Routes = require('./app/configurations/routes')
import bodyParser from 'body-parser'

const app = express()
const routes = new Routes();

app.use(bodyParser.json())

routes.routes(app);

app.listen(process.env.PORT || 7000, () => {
    console.log(`Servidor inicializado`)
})