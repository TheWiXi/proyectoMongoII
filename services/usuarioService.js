const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

class UsuarioService {
  async crearUsuario(userData) {
    return await Usuario.create(userData);
  }

  async obtenerUsuarioPorId(id) {
    return await Usuario.findById(id);
  }

  async actualizarRolUsuario(id, nuevoRol) {
    return await Usuario.findByIdAndUpdate(id, { rol: nuevoRol }, { new: true });
  }

  async listarUsuarios(filtro = {}) {
    return await Usuario.find(filtro);
  }

  generarToken(usuario) {
    return jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
  }
}

module.exports = new UsuarioService();