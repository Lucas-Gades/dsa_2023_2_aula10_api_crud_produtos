const express = require('express')
const produtoService = require('./service/produto_service')

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/produtos', (req, res) => {
  const listaProdutos = produtoService.listar();
  res.json(listaProdutos);
})

app.post('/produtos', (req, res) => {
    let produto = req.body;
    try {
      produtoService.inserir(produto);
      res.status(201).json({msg:'Inserido com sucesso!'})
    }
    catch(err) {
      //id-> 400 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
})

app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id;
    try {
      const prod = produtoService.buscarPorId(id);
      res.json(prod);
    }
    catch(err) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
})

app.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  let produto = req.body;
  console.log(produto);

  res.json({msg:'Atualizar o produto com id: '+id});
})

app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;
  res.json({msg:'Deletar o produto com id: '+id});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})