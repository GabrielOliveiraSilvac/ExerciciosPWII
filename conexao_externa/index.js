import express from 'express'
// Importando as funções lógicas do banco de dados (vamos criá-las no passo abaixo)
import { buscarClientes, buscarCliente } from './DAO/cliente/buscar_cliente.js'
import { atualizarEndereco } from './DAO/endereco/update_endereco.js'
import { buscarEndereco } from './DAO/endereco/buscar_endereco.js'
import{ buscarLimite } from './DAO/limite_credito/buscar_limite.js'
import { buscarProduto } from './DAO/produto/buscar_produto.js'
import { buscarPedido } from './DAO/pedido/buscar_pedido.js'
import { buscarPedidoProduto } from './DAO/pedido_produto/buscar_pedido-produto.js'
import { viewEndereco } from './DAO/endereco/view_endereco.js'

//Inserts
import { incluirCliente } from './DAO/cliente/inserir_cliente.js'
import { incluirEndereco } from './DAO/endereco/inserir_endereco.js'
import { incluirLimite } from './DAO/limite_credito/inserir_limite.js'
import { incluirPedido } from './DAO/pedido/inserir_pedido.js'
import { incluirPedidoProduto } from './DAO/pedido_produto/inserir_pedido-produto.js'
import { incluirProduto } from './DAO/produto/inserir_produto.js'


const app = express()

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Estacionamento Rodando perfeitamente!' })
})

//Buscar Clientes
app.get('/clientes', async (req, res) => {
    let clientes = await buscarClientes();
    res.json(clientes)
})

//Buscar Cliente via Codigo
app.get('/cliente/:codigo', async (req, res) => {
    const { codigo } = req.params;
    let cliente = await buscarCliente(codigo);
    res.json(cliente)
})

//Incluir Cliente

app.post('/clientes', async (req, res) => {
    let {codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco} = req.body   // retirando dados do body da requisição
    let infos = [codigo, nome, sobreNome, cpf, telefone, id_limite, id_endereco ]
    let results = await incluirCliente(infos)

    console.log(results)
    res.json(results)
})

//Endereço Update
app.get('/endereco', async (req, res) => {
    let endereco = await atualizarEndereco();
    res.json(endereco)
})

// Buscar Endereços
app.get('/enderecos', async (req, res) => {
    let enderecos = await viewEndereco();
    res.json(enderecos)
})

//Incluir Endereço
app.post('/enderecos', async (req, res) => {
    let {id_endereco, logradouro, numero, cep, cidade} = req.body
    let infos = [id_endereco, logradouro, numero, cep, cidade]
    let results = await incluirEndereco(infos)

    console.log(results)
    res.json(results)
})


// Buscar Limite
app.get('/limite', async (req, res) => {
    let limite = await buscarLimite();
    res.json(limite)
})

//Incluir Limite
app.post('/limite', async (req, res) => {
    let {id_limite, nome} = req.body
    let infos = [id_limite, nome]
    let results = await incluirLimite(infos)

    console.log(results)
    res.json(results)
})

//Procurando Produto
app.get('/produto', async (req, res) => {
    let produto = await buscarProduto();
    res.json(produto)
})

//Incluir Produto
app.post('/produto', async (req, res) => {
    let {codigo, nome, descricao, preco} = req.body
    let infos = [codigo, nome, descricao, preco]
    let results = await incluirProduto(infos)

    console.log(results)
    res.json(results)
})

//Buscando Pedidos com o id do cliente
app.get('/pedido', async (req, res) => {
    let pedido = await buscarPedido();
    res.json(pedido)
})

//Incluir Pedido
app.post('/pedido', async (req, res) => {
    let {numero, data_elaboracao, id_cliente} = req.body
    let infos = [numero, data_elaboracao, id_cliente]
    let results = await incluirPedido(infos)

    console.log(results)
    res.json(results)
})

//Buscando na tabela Associativa de Pedido_Produto
app.get('/Pedido_Produto', async (req, res) => {
    let associado = await buscarPedidoProduto();
    res.json(associado)
})

//Incluir PedidoProduto
app.post('/Pedido_Produto', async (req, res) => {
    let {id_pedido, id_produto} = req.body
    let infos = [id_pedido, id_produto]
    let results = await incluirPedidoProduto(infos)

    console.log(results)
    res.json(results)
})

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
