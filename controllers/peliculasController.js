import {connect} from '../config/connect.js'

const connection = new connect();

export class peliculaController {
    /**
     * * NOTA: Clase para metodos respecto a peliculas
     * @param {connection} connect conexion ya establecida.
     * @param {object} db Obtencion de la base de datos.
     */
    constructor(){
        this.connection = connection;
        this.collection = this.connection.getCollection('pelicula');
    }
    /**
     * * NOTA:Permitir la consulta de todas las películas disponibles en el catálogo, con detalles como título, género y duración .
     * @returns Peliculas disponibles(titulo, genero, duracion )
     */
    async apiUno (){
        try {
            const cursor = await this.collection.find(
                { "estado": "en cartelera" },
                { projection: { "titulo": 1, "genero": 1, "duracion": 1,  "_id": 0 } }); // * Get the cursor
            const result = await cursor.toArray(); // * Convert the cursor to an array
            console.table(result); // * Print the results
            await this.connection.close(); // * Close the connection
            return result; // * Return the results
        } 
        catch (error) {
            // ! Handle errors
            console.error("Error fetching data or closing connection:", error);
        }
    }
    /**
     * 
     * @param {String} idPelicula Id de la pelicula a consultar, ej:66a80379a5aad36c22a20c80 
     * @returns Informacion de la pelicula
     */
    async apiDos (idPelicula){
        try {
            const cursor = await this.collection.findOne(
                { "_id": new ObjectId(idPelicula) }
            ); // * Get the cursor
            console.log(cursor); // * Print the results
            await this.connection.close(); // * Close the connection
            return cursor; // * Return the results
        } 
        catch (error) {
            // ! Handle errors
            console.error("Error fetching data or closing connection:", error);
        }
    }
}