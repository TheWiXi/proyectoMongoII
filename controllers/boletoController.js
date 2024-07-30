const boletoService = require('../services/boletoService');

class BoletoController {
  async comprarBoleto(req, res) {
    try {
      const boleto = await boletoService.comprarBoleto(req.body);
      res.status(201).json(boleto);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async verificarDisponibilidadAsientos(req, res) {
    try {
      const asientosDisponibles = await boletoService.verificarDisponibilidadAsientos(req.params.peliculaId, req.query.fecha);
      res.json(asientosDisponibles);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

  async cancelarReserva(req, res) {
    try {
      await boletoService.cancelarReserva(req.params.id);
      res.json({ mensaje: 'Reserva cancelada exitosamente' });
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async aplicarDescuentoVIP(req, res) {
    try {
      const boleto = await boletoService.aplicarDescuentoVIP(req.params.id, req.body.descuento);
      res.json(boleto);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }
}

module.exports = new BoletoController();