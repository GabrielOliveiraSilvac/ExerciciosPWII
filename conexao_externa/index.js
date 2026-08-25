import express from 'express'
// Importando as funções lógicas do banco de dados (vamos criá-las no passo abaixo)
import { buscarClientes, buscarCliente } from './DAO/cliente/buscar_cliente.js'
import { atualizarEndereco } from './DAO/endereco/update_endereco.js'
import { buscarEndereco } from './DAO/endereco/buscar_endereco.js'
import{ buscarLimite } from './DAO/limite_credito/buscar_limite.js'
import { buscarProduto } from './DAO/produto/buscar_produto.js'
import { buscarPedido } from './DAO/pedido/buscar_pedido.js'
import { buscarPedidoProduto } from './DAO/pedido_produto/buscar_pedido-produto.js'

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

//Endereço Update
app.get('/endereco', async (req, res) => {
    let endereco = await atualizarEndereco();
    res.json(endereco)
})

// Buscar Endereços
app.get('/enderecos', async (req, res) => {
    let enderecos = await buscarEndereco();
    res.json(enderecos)
})

// Buscar Limite com o id do limite
app.get('/limite/:id_limite', async (req, res) => {
    const { id_limite } = req.params;
    let limite = await buscarLimite(id_limite);
    res.json(limite)
})

//Procurando Produto com o preço abaixo de 500
app.get('/produto', async (req, res) => {
    const { preco } = req.params;
    let produto = await buscarProduto(preco);
    res.json(produto)
})

//Buscando Pedidos com o id do cliente
app.get('/pedido/:id_cliente', async (req, res) => {
    const { id_cliente } = req.params;
    let pedido = await buscarPedido(id_cliente);
    res.json(pedido)
})

//Buscando na tabela Associativa de Pedido_Produto
app.get('/Pedido_Produto/:id_pedido', async (req, res) => {
    const { id_pedido } = req.params;
    let associado = await buscarPedidoProduto(id_pedido);
    res.json(associado)
})

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
