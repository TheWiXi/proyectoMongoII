const Pelicula = require('../models/Pelicula');

class PeliculaService {
  async listarPeliculas() {
    return await Pelicula.find();
  }

  async obtenerDetallesPelicula(id) {
    return await Pelicula.findById(id);
  }

  async crearPelicula(peliculaData) {
    return await Pelicula.create(peliculaData);
  }

  async actualizarPelicula(id, peliculaData) {
    return await Pelicula.findByIdAndUpdate(id, peliculaData, { new: true });
  }

  async eliminarPelicula(id) {
    return await Pelicula.findByIdAndDelete(id);
  }
}

module.exports = new PeliculaService();