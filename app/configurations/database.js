const {Pool} = require('pg')

let connectionString = {
    connectionString:process.env.DATABASE_URL,
    ssl:true
}

const pool = new Pool(connectionString);
pool.on('connect',()=> console.log("connected"));