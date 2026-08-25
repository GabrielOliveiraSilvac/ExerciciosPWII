import {conexao} from '../conexao.js'

async function atualizarEndereco(){
    const sql = `UPDATE Endereco SET cidade = 'Parnaiba' WHERE id_endereco = 8`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

export {atualizarEndereco}
