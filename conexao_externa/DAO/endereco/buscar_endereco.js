import {conexao} from '../conexao.js'


async function buscarEndereco(){
  console.log('DAO de CLIENTE')
    const sql = `Create View vwBuscarEndereco As
    SELECT nome, cidade FROM Endereco INNER JOIN Cliente ON Endereco.id_endereco = Cliente.id_endereco`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export{ buscarEndereco }
