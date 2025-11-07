const ConsultaModel = require('../model/ConsultaModel.js');

const hoje = new Date();

//recuperar começo e fim do dia

const {startOfDay, endOfDay, startOfWeek, endOfWeek} = require('date-fns')

class ConsultaController{
    static async criar(req, resp){
        const consulta = new ConsultaModel(req.body);
        await consulta.save().then(resposta =>{
            return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async atualizar(req, resp){
        await ConsultaModel
            .findByIdAndUpdate({'_id': req.params.id}, req.body, {new : true})
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async listar(req, resp){
        //$in verifica entre todos os dados existentes
        await ConsultaModel
            .find({'tipo': {'$in':req.body.tipo}})
            .sort('data')
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async buscar(req, resp){
        //$in verifica entre todos os dados existentes
        await ConsultaModel
            .findById(req.params.id)
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async concluida(req, resp){
        await ConsultaModel
            .findByIdAndUpdate({'_id': req.params.id}, {'termino':req.params.termino}, {new : true})
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async deletar(req, resp){
        //$in verifica entre todos os dados existentes
        await ConsultaModel
            .deleteOne({'_id' : req.params.id})
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async atrasadas(req, resp){
        //$lt less then
        await ConsultaModel
            .find({'data': {'$lt': hoje}}, {'termino': false})
            .sort('data')
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

    static async consultasDoDia(req, resp){
        //$lte ==> menor igual que
        //$gte ==> maior igual que
        await ConsultaModel
            .find({'data': {'$gte': startOfDay(hoje), '$lte': endOfDay(hoje)}})
            .sort('data')
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }

     static async consultasDaSemana(req, resp){
        await ConsultaModel
            .find({'data': {'$gte': startOfWeek(hoje), '$lte': endOfWeek(hoje)}})
            .sort('data')
            .then(resposta =>{
                return resp.status(200).json(resposta);
        })
        .catch(erro=>{
            return resp.status(500).json(erro);
        })
    }
}

module.exports = ConsultaController;