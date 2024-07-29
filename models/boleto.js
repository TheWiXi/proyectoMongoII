import { Schema, model } from 'mongoose';

const boletoSchema = new Schema({
  funcion: {
    type: Schema.Types.ObjectId,
    ref: 'Pelicula', // Referencia al horario de la película
    required: [true, 'La función es obligatoria']
  },
  pelicula: {
    type: Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: [true, 'La película es obligatoria']
  },
  sala: {
    type: Schema.Types.ObjectId,
    ref: 'Sala',
    required: [true, 'La sala es obligatoria']
  },
  asiento: {
    type: String,
    required: [true, 'El asiento es obligatorio']
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es obligatorio']
  }
  // createdAt se agrega automáticamente por Mongoose
});

const Boleto = model('Boleto', boletoSchema);
export default Boleto;
