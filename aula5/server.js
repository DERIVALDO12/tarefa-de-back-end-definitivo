const express = require('express');
const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        mensagem: "Meu servidor esta no ar!",
    });
});

// ex1

app.get('/sobre', (req, res) => {
    res.json({
        nome: "Rhuan Lagos",
        disciplina: "back-end",
        ano: "2º ano c"
    });
});

//ex2


const produtos = [
{id: 1, nome: "ps5",  preco: 1000},
{id: 2, nome: "salgado",  preco: 10},
{id: 3, nome: "lapis",  preco: 5000},
{id: 4, nome: "caneta DO DIEGO",  preco: 100000}
]

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//ex3

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor funcionando normalmente."
    });
});

//ex4

app.get('/produtos/caros', (req, res) => {
    const produtosCaros = produtos.filter(produtos => produtos.preco > 100);
    res.json(produtosCaros);
});



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});