const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const usuariosRoutes = require('./routes/usuarios');
const peliculasRoutes = require('./routes/peliculas');
const boletosRoutes = require('./routes/boletos');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/peliculas', peliculasRoutes);
app.use('/api/boletos', boletosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));