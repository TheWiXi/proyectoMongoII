import { Schema, model } from 'mongoose';

const salaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la sala es obligatorio'],
    trim: true
  },
  capacidad: {
    type: Number,
    required: [true, 'La capacidad es obligatoria'],
    min: [1, 'La capacidad debe ser al menos 1']
  },
  filas: {
    type: Number,
    required: [true, 'El número de filas es obligatorio'],
    min: [1, 'El número de filas debe ser al menos 1']
  },
  asientosPorFila: {
    type: Number,
    required: [true, 'El número de asientos por fila es obligatorio'],
    min: [1, 'El número de asientos por fila debe ser al menos 1']
  }
  // createdAt y updatedAt se agregan automáticamente por Mongoose
});

const Sala = model('Sala', salaSchema);
export default Sala;
