const crypto = require('crypto');
const {pool} = require('../../configurations/database');

class LoginServices{

    constructor(){

    }

    login(dados){
        
        
        return false;
    }

    register(){
    }
    
    getAll(response){

        pool.query('SELECT * FROM USUARIO',(error,results)=>{

            if(error){
                throw error;
            }
            response.status(200).json(results.rows);
        });
    }

    encrypt(pwd){
        return crypto.createHash('sha256').update(pwd).digest('base64');
    }
}

module.exports = LoginServices;