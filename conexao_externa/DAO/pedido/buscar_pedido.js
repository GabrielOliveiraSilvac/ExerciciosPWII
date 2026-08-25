import {conexao} from '../conexao.js'

async function buscarPedido(id_cliente){
    const sql = `SELECT * FROM Pedido WHERE id_cliente = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [id_cliente]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export{buscarPedido}