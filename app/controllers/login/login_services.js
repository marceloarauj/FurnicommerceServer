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
    
    async getAll(){
        let values={};

        await pool.query('SELECT * FROM USUARIO',(error,results)=>{

            if(error){
                throw error;
            }
            values = results.rows;
        });
        console.log(values);
        return values;
    }

    encrypt(pwd){
        return crypto.createHash('sha256').update(pwd).digest('base64');
    }
}

module.exports = LoginServices;