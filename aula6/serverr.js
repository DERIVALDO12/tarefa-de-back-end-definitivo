const express = require('express');
const app = express();
app.use(express.json());

let canetas = [
  { id: 1, tipo: "caneta", preço: 5.00 },
  { id: 2, tipo: "lápis", preço: 2.50 }
];

let proID = 3;


app.get('/caneta', (req, res) => {
  res.json(canetas);
});


app.get('/caneta/:id', (req, res) => {
  const id = Number(req.params.id);
  const caneta = canetas.find(a => a.id === id);

  if (!caneta) {
    return res.status(404).json({ erro: "caneta/lápis não encontrado" });
  }

  res.json(caneta);
});


app.post('/caneta', (req, res) => {
  const novoproduto = {
    id: proID,
    tipo: req.body.tipo,
    preço: req.body.preço
  };

  canetas.push(novoproduto);
  proID++;

  res.status(201).json(novoproduto);
});


app.put('/caneta/:id', (req, res) => {
  const id = Number(req.params.id);
  const caneta = canetas.find(a => a.id === id);

  if (!caneta) {
    return res.status(404).json({ erro: "caneta/lápis não encontrado" });
  }

  caneta.tipo = req.body.tipo;
  caneta.preço = req.body.preço;

  res.json(caneta);
});


app.delete('/caneta/:id', (req, res) => {
  const id = Number(req.params.id);
  const caneta = canetas.find(a => a.id === id);

  if (!caneta) {
    return res.status(404).json({ erro: "caneta/lápis não encontrado" });
  }

  canetas = canetas.filter(a => a.id !== id);

  res.json({ mensagem: "caneta/lápis removido com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

