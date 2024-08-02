import { peliculaController } from "./controllers/peliculasController.js";
import {connect} from "./config/connect.js";
import { funcionController } from "./controllers/funcionController.js";
import { boletoController } from "./controllers/boletosController.js";
import { ObjectId } from 'mongodb';
import { usuarioController } from "./controllers/usersController.js";

const newRol = "user";
const idUser = 9876543212;
const showUsers = new usuarioController().apiCuatro(idUser,newRol);
