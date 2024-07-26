import { Schema, model } from 'mongoose';

const peliculaSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  genero: [{
    type: String,
    enum: ['Acción', 'Aventura', 'Comedia', 'Drama', 'Ciencia Ficción', 'Terror', 'Animación', 'Documental', 'Otro']
  }],
  duracion: {
    type: Number,
    required: [true, 'La duración es obligatoria'],
    min: [0, 'La duración debe ser un número positivo']
  },
  horarios: [{
    fecha: {
      type: Date,
      required: [true, 'La fecha es obligatoria']
    },
    hora: {
      type: String,
      required: [true, 'La hora es obligatoria'],
      match: [/^([01]\d|2[0-3]):([0-5]\d)$/, 'La hora debe tener el formato HH:mm']
    }
  }],
  sala: {
    type: Schema.Types.ObjectId,
    ref: 'Sala',
    required: [true, 'La sala es obligatoria']
  },
  asientos: [{
    numero: {
      type: String,
      required: [true, 'El número de asiento es obligatorio']
    },
    estado: {
      type: String,
      enum: ['disponible', 'ocupado'],
      default: 'disponible'
    }
  }]
  // createdAt y updatedAt se agregan automáticamente por Mongoose
});

const Pelicula = model('Pelicula', peliculaSchema);
export default Pelicula;
