import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });//upload enviroment variables

export class connect {
    static instance;
    #user;
    #port;
    #pass;
    #host;
    #cluster;
    #dbName;
    #connection;
    uri;
    constructor() {
        if (typeof connect.instance === 'object') {
            return connect.instance;
        }
        this.#user = process.env.MONGO_USER;
        this.#port = process.env.MONGO_PORT;
        this.#pass = process.env.MONGO_PASS;
        this.#host = process.env.MONGO_HOST;
        this.#cluster = process.env.MONGO_CLUSTER;
        this.#dbName = process.env.MONGO_DBNAME;
        this.uri =`${this.#host}${this.#user}:${this.#pass}@${this.#cluster}:${this.#port}/${this.#dbName}`
        this.open();
        connect.instance = this;
        return this;
    }

    async open() {
        try {
            this.#connection = new MongoClient(this.uri);
            await this.#connection.connect();
            console.log(this.uri,'Connection to MongoDB is done');
        } catch (error) {
            console.error(this.uri,'Error connecting to MongoDB:', error);
            await this.reconnect();
        }
    }

    async reconnect() {
        console.log('Reconnecting to MongoDB...');
        await this.open();
    }

    async close() {
        try {
            await this.#connection.close();
            console.log('Connection to MongoDB closed successfully.');
        } catch (error) {
            console.error('Error closing connection to MongoDB:', error);
        }
    }

    getDb() {
        if (!this.#connection) {
            throw new Error('No active database connection.');
        }
        return this.#connection.db(this.#dbName);
    }

    getCollection(collectionName) {
        return this.getDb().collection(collectionName);
    }
}