const Boleto = require('../models/Boleto');

class BoletoService {
  async comprarBoleto(boletoData) {
    return await Boleto.create(boletoData);
  }

  async verificarDisponibilidadAsientos(peliculaId, fecha) {
    const boletosVendidos = await Boleto.find({ pelicula: peliculaId, fecha });
    // Aquí deberías implementar la lógica para determinar qué asientos están disponibles
    // basándote en los boletos ya vendidos
  }

  async cancelarReserva(boletoId) {
    return await Boleto.findByIdAndDelete(boletoId);
  }

  async aplicarDescuentoVIP(boletoId, descuento) {
    const boleto = await Boleto.findById(boletoId);
    boleto.precio -= descuento;
    return await boleto.save();
  }
}

module.exports = new BoletoService();