const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilialSchema = new Schema({
    cod: { type: Number, require: true, unique: true },
    filial: { type: String, require: true },
    logoMarca: { type: Number, require: true },
    uf: { type: String, require: true },
    data: { type: String},
    versao: { type: String},
    codVersao: { type: Number},
    
});

module.exports = mongoose.model('Filiais', FilialSchema);