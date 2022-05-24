const sequence = {
    _id: 1,
    get id() { return this._id++ }  // get definirá o método "id" para quando acionado retornar o valor de "_id" mais 1
}

const produtos = {}  // objeto que atuará como um banco de dados para os produtos!

function salvarProduto(produto) {  // recebrá o obj "produto" atraves do POST do cliente 
    if (!produto.id) produto.id = sequence.id  // definirá chave e valor para "id" no obj "produto" passado caso não definido
    produtos[produto.id] = produto  // cadastrará em "produtos" a chave no valor de "produto.id" e valor o obj "produto" passado
    return produto  // retornará o obj "produto" passado já setado como definimos anteriormente
}

function getProduto(id) {    // função que retorna o produto em "produtos" com base no id passado
    return produtos[id] || {}
}

function getProdutos() {    // função que retorna todos os produtos cadastrados em "produtos"
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }