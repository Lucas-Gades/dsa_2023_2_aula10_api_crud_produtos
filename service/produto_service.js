const produtoRepository = require('../repository/produto_repository')

function listar() {
    return produtoRepository.listar();
}


function inserir(produto) {
    if(produto && produto.nome && produto.preco) {// produto != undefined
        produtoRepository.inserir(produto);
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }
}

const produto3 = {
    nome: "feijao",
    categoria: "alimento",
    preco: 9
};
produtoRepository.inserir(produto3);
function buscarPorId(id) {
    const produto = produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId
}