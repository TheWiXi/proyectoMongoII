import { Schema, model } from 'mongoose';

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  nickname: {
    type: String,
    required: [true, 'El nickname es obligatorio'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Por favor ingrese un correo electrónico válido'
    }
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  },
  tipo: {
    type: String,
    required: true,
    enum: ['administrador', 'estandar', 'vip'],
    default: 'estandar'
  },
  vipCard: {
    type: String,
    validate: {
      validator: function(v) {
        return this.tipo === 'vip' ? v !== undefined : v === undefined;
      },
      message: 'El número de tarjeta VIP solo es válido para usuarios VIP'
    }
  }
  // createdAt y updatedAt se agregan automáticamente por Mongoose
});

const Usuario = model('Usuario', usuarioSchema);
export default Usuario;
