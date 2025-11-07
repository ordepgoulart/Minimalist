const ConsultaModel = require('../model/ConsultaModel');
const {isPast} = require('date-fns');

const ConsultaValida = async (req, resp, next)=>{
    const tipo  = req.body.tipo;
    const paciente = req.body.paciente;
    const descricao = req.body.descricao;
    const data = req.body.data;

    if(!tipo)
        return resp.status(400).json({erro: 'O tipo é obrigatório'});
    else if(!paciente)
        return resp.status(400).json({erro: 'O paciente é obrigatório'});
    else if(!descricao)
        return resp.status(400).json({erro: 'A descricao é obrigatório'});
    else if(!data)
        return resp.status(400).json({erro: 'A data é obrigatório'});
    else if (isPast(new Date(data)))
        return resp.status(400).json({erro: 'Made in heaven'})
    else {
        let exist;
        //$ne verifica se não existe
        //$eq equal
        if(req.params.id){
            exist = await ConsultaModel
                            .findOne({'data' : {'$eq': new Date(data)}, '_id':{'$ne' : req.params.id}})
        }
        else {
             exist = await ConsultaModel.findOne({'data' : {$eq: new Date(data)}})
        }
        if (exist)
            return resp.status(400).json({erro: 'Uma consulta já esá marcada para o horário e data informados'})
        next();
    }
}

module.exports = ConsultaValida