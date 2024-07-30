const mongoose = require('mongoose');

const boletoSchema = new mongoose.Schema({
  pelicula: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: [true, 'La película es requerida']
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es requerido']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es requerida']
  },
  asiento: {
    type: String,
    required: [true, 'El asiento es requerido']
  },
  precio: {
    type: Number,
    required: [true, 'El precio es requerido']
  }
}, { timestamps: true });

module.exports = mongoose.model('Boleto', boletoSchema);