import { connect } from '../config/connect.js'
import { ObjectId } from 'mongodb';

const connection = new connect();

export class usuarioController {
    /**
     * * NOTA: Clase para metodos respecto a usuarios
     */
    constructor(){
        this.connection = connection;
        this.db = this.connection.getDb();
        this.collection = this.connection.getCollection('usuario');
    }
    /**
     * * NOTA: Creacion de usuarios en Mongo
     * @param {Array} user - data completa del usuario
     *  _id: 987654321,
        Nombre: "user prueba",
        Nick: "prueba",
        contrasenia: "prueba123", 
        email: "prueba@example.com",
        telefono: "3216549870",
        rol: (admin, vip o user)
        tarjeta: {
            fechaVencimiento: new Date("2025-06-15T00:00:00.000+00:00"),
            estado: "activa"
        }
     * @returns mensaje de confirmacion
     */
    async apiUno (user){
        try {
            try {
                const result = await this.collection.insertOne(user);
                console.log('User inserted with id:', result.insertedId);
            } 
            catch (error) {
                console.error('Error inserting user:', error);
            }
            if (user.rol === "user" || user.rol === "vip" || user.rol === "admin" ){
                const result = await this.db.command({
                    createUser: user.Nick,
                    pwd: user.contrasenia,
                    roles: [{ role: user.rol, db: "Cine" }]
                })
                console.log("Usuario registrado con exito.");
                return result;
            }
            else {
                console.log("Error: Rol no válido");
            }
            await this.connection.close(); // * Close the connection
        } 
        catch (error) {
            console.error('Error inserting usuario:', error);
        }
    }
    /**
     * *NOTA: Lista todos los usuarios
     * @returns Todos los usuarios
     */
    async apiDos(){
        try {
            const cursor = await this.collection.find(); // * Get the cursor
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
     * *NOTA: Listar usuarios de un mismo rol
     * @param {String} rol - rol (user,vip o admin)
     * @returns usuarios con ese rol
     */
    async apiTres(rol){
        if (user.rol === "user" || user.rol === "vip" || user.rol === "admin" ){
            try {
                const cursor = await this.collection.find({"rol": rol}); // * Get the cursor
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
        else {
            console.log("Error: Rol no válido");
        }
    }
}

