const crypto = require('crypto');
const pool = require('../../configurations/database');

class LoginServices{

    constructor(){

    }

    login(dados){
        
        
        return false;
    }

    register(){
    }
    
    getAll(){
        pool.query('SELECT * FROM USUARIO',(error,results)=>{

            console.log(results.rows);
        });
    }

    encrypt(pwd){
        return crypto.createHash('sha256').update(pwd).digest('base64');
    }
}

module.exports = LoginServices;