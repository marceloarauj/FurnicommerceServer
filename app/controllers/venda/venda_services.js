const {pool} = require('../../configurations/database');
var moment = require('moment');

class VendaServices{


    novaVenda(body,response){

        var date = moment(Date.now()).format();
        pool.query(
            `INSERT INTO VENDA(
                USUARIO_ID,
                MOVEL_ID,
                STATUS_ID,
                DATA_VENDA,
                IMAGEM
            )VALUES(
                '${parseInt(body.uid)}',
                '${body.movelId}',
                ${1},
                '${date}',
                '${body.imagem}'
            )`,
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
            SELECT m.MOVEL_ID as movel,
                   s.STATUS_ID as status_venda,
                   v.DATA_VENDA,

            FROM VENDA v 
            join USUARIO u on v.USUARIO_ID = u.USUARIO_ID
            join MOVEIS m  on m.MOVEL_ID = v.MOVEL_ID
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
    obterVendasUsuario(response,body){
        pool.query(
            `
            SELECT m.MOVEL_ID as movel,
                   s.STATUS_ID as status_venda,
                   v.DATA_VENDA,
                   v.IMAGEM   

            FROM VENDA v 
            join USUARIO u on v.USUARIO_ID = u.USUARIO_ID
            join MOVEIS m  on m.MOVEL_ID = v.MOVEL_ID
            join STATUS s  on s.STATUS_ID = v.STATUS_ID
            WHERE u.USUARIO_ID = '${parseInt(body.uid)}'
            `,
            (error,results)=>{
                if(error){
                    throw error
                }
                response.status(200).json(results.rows);
            }
        )
    }
    obterVendaPorId(body,response){
        pool.query(
            `
            SELECT m.MOVEL_ID as movel,
                   u.NOME as usuario,
                   s.STATUS_ID as status_venda,
                   v.DATA_VENDA,
                   v.IMAGEM   

            FROM VENDA v 
            join USUARIO u on v.USUARIO_ID = u.USUARIO_ID
            join MOVEIS m  on m.MOVEL_ID = v.MOVEL_ID
            join STATUS s  on s.STATUS_ID = v.STATUS_ID
            WHERE v.VENDA_ID = '${parseInt(body.venda_id)}'
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