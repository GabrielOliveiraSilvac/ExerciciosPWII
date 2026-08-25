import {conexao} from '../conexao.js'

async function buscarPedidoProduto(id_cliente){
    const sql = `SELECT * FROM Pedido_Produto WHERE id_pedido = ?`
    
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

export{buscarPedidoProduto}