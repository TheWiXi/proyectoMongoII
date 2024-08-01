import { connect } from '../config/connect.js'
import { ObjectId } from 'mongodb';

const connection = new connect();

export class funcionController {
    /**
     * * NOTA: Clase para metodos respecto a funciones (sala/horario/pelicula)
     */
    constructor(){
        this.connection = connection;
        this.collection = this.connection.getCollection('funcion');
    }
    /**
     * * NOTA:Mostrar funciones disponibles
     * @returns Funciones disponibles
     */
    async apiUno (){
        try {
            const cursor = await this.collection.aggregate(
            [
                {
                $lookup: {
                    from: 'pelicula',
                    localField: 'id_pelicula',
                    foreignField: '_id',
                    as: 'pelicula_info'
                }
                },
                { $unwind: '$pelicula_info' },
                {
                $lookup: {
                    from: 'sala',
                    localField: 'id_sala',
                    foreignField: '_id',
                    as: 'sala_info'
                }
                },
                { $unwind: '$sala_info' },
                {
                $project: {
                    pelicula: '$pelicula_info.titulo',
                    fecha_init: 1,
                    sala: '$sala_info.nombre',
                    fecha_end: 1
                }
                }
            ],
            { maxTimeMS: 60000, allowDiskUse: true }
            );
              // * Get the cursor
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
     * @param {String} idFuncion Id de la funcion a consultar, ej:66a807cca5aad36c22a20ca3 
     * @returns asientos disponibles de la funcion
     */
    async apiDos (idFuncion){
        try {
            const cursor = await this.collection.findOne(
                {"_id": new ObjectId(idFuncion)},
                {projection: {"_id":0, "asientos": {"$elemMatch": {"estado": "disponible"}}}}
            ); // * Get the cursor
            console.table(cursor); // * Print the results
            await this.connection.close(); // * Close the connection
            return cursor; // * Return the results
        } 
        catch (error) {
            // ! Handle errors
            console.error("Error fetching data or closing connection:", error);
        }
    }
    async apiTres (idFuncion,codAsiento){
        try {
            const cursor = await this.collection.updateOne(
                {"_id": new ObjectId(idFuncion), "asientos.codigo": codAsiento},
                { $set: { "asientos.$.estado": "reservado" } }
            ); 
            console.log("Asiento reservado con exito."); // * Print the results
            await this.connection.close(); // * Close the connection
            return cursor; // * Return the results
        } 
        catch (error) {
            // ! Handle errors
            console.error("Error fetching data or closing connection:", error);
        }
    }
}