const express = require('express')
const path = require('path')
const rota = require('./rotas')

const app = express();

app.use(express.static(path.join(__dirname, 'html')));
app.use('/', rota); // Todas as rotas do roteador "router" serão acessíveis a partir de "/"


app.listen(6289, () => {
    console.log('Servidor rodando na URL http://localhost:6289');
});