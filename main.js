import { peliculaController } from "./controllers/peliculasController.js";
import {connect} from "./config/connect.js";

const viewpelis = new peliculaController();

await viewpelis.apiUno();

// console.table(viewpelis);  
