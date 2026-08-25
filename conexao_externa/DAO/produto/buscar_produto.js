import {conexao} from '../conexao.js'

async function buscarProduto(preco){
    const sql = `SELECT * FROM Produto WHERE preco <= 500`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [preco]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export{buscarProduto}