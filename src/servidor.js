const porta = 3003  // armazenando em "porta" uma porta de comunicação

const express = require('express')  // importando o framework/módulo express
const bodyparser = require('body-parser')
const app = express() // armazenando em "app" o objeto retornado de "express()" contendo todos os métodos do framework

const bd = require('./bancoDeDados.js')  // importa o arquivo externo que criamos "bancoDeDados.js"

app.use(bodyparser.text())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {   // GET retorna os produtos cadastrados
    res.send(bd.getProdutos()) //JSON
})

app.get('/produtos/:id', (req, res, next) => {  // GET retorna produto específico pelo id passado
    res.send(bd.getProduto(req.params.id)) //JSON
})

app.post('/produtos', (req, res, next) => {    // POST salva um produto através da function "salvarProduto"
    const produto = bd.salvarProduto({
        nome: req.body.name,
        preco: req.body.price
    })
    res.send(produto)  // JSON
})

app.put('/produtos/:id', (req, res, next) => {     // modifica um produto através da function "salvarProduto"
    const produto = bd.salvarProduto({
        nome: req.body.name,
        preco: req.body.price,
        id: req.params.id
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {     // deleta um produto através da function "excluirProduto"
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)  //JSON
})

app.listen(porta, () => console.log(`Servidor está executando na porta: ${porta}`))   // aciona a porta de comunicação