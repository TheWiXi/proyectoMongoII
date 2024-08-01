import { connect } from '../config/connect.js'
import { ObjectId } from 'mongodb';

const connection = new connect();

export class boletoController {
    /**
     * * NOTA: Clase para metodos respecto a boletos
     */
    constructor(){
        this.connection = connection;
        this.collection = this.connection.getCollection('boleto');
    }
    /**
     * * NOTA:Permitir la compra de boletos
     * @param {Array} newticket - contiene los siguientes:
     * @param {string} idFuncion id de la funcion elegida ej "66a807cca5aad36c22a20ca3"
     * @param {string} asiento asiento elegido ej "A1"
     * @param {date} fechaCompra fecha de compra ej "2024-07-31T11:50:46.715Z"
     * @param {string} idSala id de la sala eje "66a8058ca5aad36c22a20c9e"
     * @param {int} subtotal subtotal de la compra
     * @param {int} total total de la compra
     * @param {int} cc cedula usuario
     * @returns 
     */
    async apiUno (newticket){
        try {
            const result = await this.collection.insertOne(newticket);
            console.log('Ticket inserted with id:', result.insertedId);
            return result;
        } 
        catch (error) {
            console.error('Error inserting ticket:', error);
        }
    }
}