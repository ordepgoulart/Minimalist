const mongoose = require('../config/db');

//Shema -> arquitetura utilizada para respresentar intels para armazenar no banco

const Schema = mongoose.Schema;

const ConsultaSchema = new Schema({
    tipo: {type: Number, required: true},
    paciente: {type: String, required: true},
    //2025-10-24T12:59:27.406Z
    data: {type: Date, required: true},
    descricao: {type: String, required: true},
    termino: {type: Boolean, default: false},
    criada: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Consulta', ConsultaSchema);