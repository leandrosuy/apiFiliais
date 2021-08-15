const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicoSchema = new Schema({
    cod: { type: Number, require: true, unique: true },
    versao: { type: String, require: true }
    
});

module.exports = mongoose.model('Servico', ServicoSchema);