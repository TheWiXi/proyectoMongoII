const express = require('express');
const router = express.Router();
const boletoController = require('../controllers/boletoController');

router.post('/', boletoController.comprarBoleto);
router.get('/disponibilidad/:peliculaId', boletoController.verificarDisponibilidadAsientos);
router.delete('/:id', boletoController.cancelarReserva);
router.post('/:id/descuento', boletoController.aplicarDescuentoVIP);

module.exports = router;