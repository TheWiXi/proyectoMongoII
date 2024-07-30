const usuarioService = require('../services/usuarioService');

class UsuarioController {
  async crearUsuario(req, res) {
    try {
      const usuario = await usuarioService.crearUsuario(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async obtenerDetallesUsuario(req, res) {
    try {
      const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

  async actualizarRolUsuario(req, res) {
    try {
      const usuario = await usuarioService.actualizarRolUsuario(req.params.id, req.body.rol);
      if (!usuario) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuarios(req.query);
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }
}

module.exports = new UsuarioController();