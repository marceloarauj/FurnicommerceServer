const {pool} = require('../../configurations/database');

class VendaServices{


    novaVenda(body,response){
        pool.query(
            `INSERT INTO VENDA(
                USUARIO_ID,
                MOVEL_ID,
                STATUS_ID,
                DATA_VENDA,
                IMAGEM
            )VALUES
                ${parseInt(body.uid)},
                ${body.movelId},
                ${1},
                ${new Date()},
                ${body.imagem}
            `,
            (error,results)=>{
                if(error){
                    throw error
                }
                response.status(200).send("Venda cadastrada !")
            }
        )
    }

    obterTodos(response){
        pool.query(
            `
            SELECT m.TIPO,
                   u.NOME,
                   s.NOME,
                   v.DATA_VENDA,
                   v.IMAGEM   

            FROM VENDA v 
            join USUARIO u on v.USUARIO_ID = u.USUARIO_ID
            join MOVEL m   on m.MOVEL_ID = v.MODEL_ID
            join STATUS s  on s.STATUS_ID = v.STATUS_ID
            `,
            (error,results)=>{
                if(error){
                    throw error
                }
                response.status(200).json(results.rows);
            }
        )
    }
}

module.exports = VendaServices;