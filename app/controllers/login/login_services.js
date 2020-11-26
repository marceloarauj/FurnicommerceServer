const crypto = require('crypto');
const { pool } = require('../../configurations/database');

class LoginServices {

    constructor() {

    }

    login(body, response) {

        pool.query(`SELECT USUARIO_ID,NOME,CPF,EMAIL FROM USUARIO 
                        WHERE EMAIL = '${body.email}' 
                        AND SENHA = '${this.encrypt(body.senha)}'`,

            (error, results) => {

                if (results.rows == 0) {
                    response.status(403).send({ "error": "Login ou senha incorretos" });
                }else{
                    response.status(200).json(results.rows);
                }
            });

        return false;
    }

    register(body, response) {

        pool.query(`SELECT * FROM USUARIO WHERE EMAIL = '${body.email}'`,
            (error, results) => {
                if (results.rowCount > 0) {
                    response.status(400).send({ "error": "Já existe usuário com este e-mail" });
                } else {

                    pool.query(`INSERT INTO USUARIO (
                    NOME
                    ,CPF
                    ,EMAIL
                    ,SENHA
                    ,ENDERECO
                    )
                VALUES (
                    '${body.nome}'
                    ,'${body.cpf}'
                    ,'${body.email}'
                    ,'${this.encrypt(body.senha)}'
                    ,'${body.endereco}'
                    )`, (error, results) => {
                        if (error) {
                            throw error
                        }
                        response.status(200).send({ "mensagem": "usuario cadastrado !" });
                    });
                }

            });
    }

    getAll(response) {

        pool.query('SELECT NOME,EMAIL FROM USUARIO', (error, results) => {

            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    }

    encrypt(pwd) {
        return crypto.createHash('sha256').update(pwd).digest('base64');
    }
}

module.exports = LoginServices;