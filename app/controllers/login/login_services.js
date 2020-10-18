const crypto = require('crypto');
const db = require('../../configurations/database')
const {Pool} = require('pg')

let connectionString = {
    connectionString:process.env.DATABASE_URL,
    ssl:true
}
const pool = new Pool(connectionString);

class LoginServices{

    constructor(){

    }

    login(dados){
        
        
        return false;
    }

    register(){
    }
    
    getAll(){
        pool.connect(connectionString,function(err,client,done){
            client.query('SELECT * FROM USUARIO',function(err,result){
                done();
                return result.rows;
            });
        });
    }

    encrypt(pwd){
        return crypto.createHash('sha256').update(pwd).digest('base64');
    }
}

module.exports = LoginServices;