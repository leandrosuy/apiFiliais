const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParse =require('body-parser');

const url = 'mongodb+srv://leandrosuy:12345672@controlefiliais.1s5mv.mongodb.net/filiaiServicos?retryWrites=true&w=majority'
const options = {
    reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true
}

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (erro) => {
    console.log('Erro na conexão com o banco de dados: ' + erro);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
});

// BODY PARSER
app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());

const filiais = require('./Routes/filiais');
const servicos = require('./Routes/servicos')

app.use('/filiais', filiais);
app.use('/servicos', servicos);

app.listen((3333), () => {
    console.log('Servidor rodando...');
})

module.exports = app;