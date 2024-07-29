const mongoose = require('mongoose');

const boletoSchema = new mongoose.Schema({
  funcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula', // Referencia al horario de la película
    required: [true, 'La función es obligatoria']
  },
  pelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: [true, 'La película es obligatoria']
  },
  sala: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sala',
    required: [true, 'La sala es obligatoria']
  },
  asiento: {
    type: String,
    required: [true, 'El asiento es obligatorio']
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es obligatorio']
  }
  // createdAt se agrega automáticamente por Mongoose
});

const Boleto = mongoose.model('Boleto', boletoSchema);
module.exports = Boleto;
