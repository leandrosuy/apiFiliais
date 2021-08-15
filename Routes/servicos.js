const express = require('express');
const router = express.Router();
const Servicos = require('../model/servicos');

router.get('/', (requisicao, resposta) => {
    Servicos.find({}, (erro, data) => {
        if(erro) return resposta.send({ error: 'Erro na consulta de Serviços!'});
        return resposta.send(data);
    });
});

router.post('/criarservico', (requisicao, resposta) => {
    const { cod, versao} = requisicao.body;

    if(!cod || !versao) return resposta.send( { erro: 'Dados insuficientes!' } );

    Servicos.findOne({ cod }, (erro, data) => {
        if(erro) return resposta.send({ error: 'Erro ao buscar usuário!'});
        if(data) return resposta.send({ erro: 'Usuário já cadastrado!' });

        Servicos.create(requisicao.body, (erro, data) => {
            if(erro) return resposta.send({ erro: 'Erro ao criar usuário!' });
            return resposta.send(data);
        });
    });
});

module.exports = router;