import { Schema, model } from 'mongoose';

const boletoSchema = new Schema({
  horario: {
    type: mongoose.Schema.Types.ObjectId, // Referenciamos directamente el _id del horario
    ref: 'Pelicula.horarios._id', // Referencia al _id dentro del array horarios de Pelicula
    required: true
  },
  pelicula: {
    type: Schema.Types.ObjectId,
    ref: 'Pelicula',
    required: [true, 'La película es obligatoria']
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
