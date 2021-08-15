const express = require('express');
const router = express.Router();
const Filiais = require('../model/filiais');

router.get('/', (requisicao, resposta) => {
    Filiais.find({}, (erro, data) => {
        if(erro) return resposta.send({ error: 'Erro na consulta de Serviços!'});
        return resposta.send(data);
    });
});

router.post('/criarfiliais', (requisicao, resposta) => {
    const { cod, filial, logoMarca, uf, data, versao, codVersao} = requisicao.body;

    if(!cod || !filial || !logoMarca || !uf || !data || !versao || !codVersao) return resposta.send( { erro: 'Dados insuficientes!' } );

    Filiais.findOne({ cod }, (erro, data) => {
        if(erro) return resposta.send({ error: 'Erro ao buscar usuário!'});
        if(data) return resposta.send({ erro: 'Usuário já cadastrado!' });

        Filiais.create(requisicao.body, (erro, data) => {
            if(erro) return resposta.send({ erro: 'Erro ao criar usuário!' });
            return resposta.send(data);
        });
    });
});

module.exports = router;