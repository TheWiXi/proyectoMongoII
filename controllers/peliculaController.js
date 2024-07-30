const peliculaService = require('../services/peliculaService');

class PeliculaController {
  async listarPeliculas(req, res) {
    try {
      const peliculas = await peliculaService.listarPeliculas();
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

  async obtenerDetallesPelicula(req, res) {
    try {
      const pelicula = await peliculaService.obtenerDetallesPelicula(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.json(pelicula);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

  async crearPelicula(req, res) {
    try {
      const pelicula = await peliculaService.crearPelicula(req.body);
      res.status(201).json(pelicula);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async actualizarPelicula(req, res) {
    try {
      const pelicula = await peliculaService.actualizarPelicula(req.params.id, req.body);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.json(pelicula);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async eliminarPelicula(req, res) {
    try {
      const pelicula = await peliculaService.eliminarPelicula(req.params.id);
      if (!pelicula) {
        return res.status(404).json({ mensaje: 'Película no encontrada' });
      }
      res.json({ mensaje: 'Película eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }
}

module.exports = new PeliculaController();