const express = require('express');
const rota = express.Router();
const ConsultaController = require('../controller/ConsultaController.js');
const ConsultaValida = require('../middlewares/ConsultaValida')


//toda vez que chegar uma req do tipo post em /consulta
//vou chegar o controller para receber o post
rota.post('/' , ConsultaValida, ConsultaController.criar);

rota.put('/:id', ConsultaValida, ConsultaController.atualizar);

rota.get('/listar', ConsultaController.listar);

rota.get('/buscar/:id', ConsultaController.buscar);

rota.delete('/deletar/:id', ConsultaController.deletar);

rota.put('/concluir/:id/:termino', ConsultaController.concluida);

rota.get('/atrasadas', ConsultaController.atrasadas);

rota.get('/hoje', ConsultaController.consultasDoDia);

rota.get('/semana', ConsultaController.consultasDaSemana);

module.exports = rota;