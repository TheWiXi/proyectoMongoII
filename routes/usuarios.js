const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.crearUsuario);
router.get('/:id', usuarioController.obtenerDetallesUsuario);
router.put('/:id/rol', usuarioController.actualizarRolUsuario);
router.get('/', usuarioController.listarUsuarios);

module.exports = router;