const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/produtos', (req, res) => {
    res.json({msg:'Listar Produtos'})
})

app.post('/produtos', (req, res) => {
    let produto = req.body;
    console.log(produto);
    res.status(201).json({msg:'Inserir Produtos'})
})

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    res.json({msg:'Buscar pelo id: '+id});
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