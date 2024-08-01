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
    constructor(){
        // Check if an instance already exists
        if(typeof connect.instance === 'object'){
            return connect.instance;
        }
        // Import credentials from environment variables
        this.user = process.env.MONGO_USER;
        this.port = process.env.MONGO_PORT;
        this.setPass = process.env.MONGO_PASS;
        this.setHost = process.env.MONGO_HOST;
        this.setCluster = process.env.MONGO_CLUSTER;
        this.setDbName = process.env.MONGO_DBNAME;
        // Establish the connection
        this.open();
        // Set the current instance as the only instance
        connect.instance = this;
        return this
    }
    // Setters
    set setUser(user) {
        this.#user = user;
    }
    set setPort(port) {
        this.#port = port;
    }
    set setPass(pass) {
        this.#pass = pass;
    }
    set setHost(host) {
        this.#host = host;
    }
    set setCluster(cluster) {
        this.#cluster = cluster;
    }
    set setDbName(dbName) {
        this.#dbName = dbName;
    }
    // Getters
    get getUser() {
        return this.#user;
    }
    get getPort() {
        return this.#port;
    }
    get getPass() {
        return this.#pass;
    }
    get getHost() {
        return this.#host;
    }
    get getCluster() {
        return this.#cluster;
    }
    get getDbName() {
        return this.#dbName;
    }
    // Open connection
    async open () {
        try{ //set up URI to connect mongoDB
            this.#connection = new MongoClient(`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}/${this.getDbName}`)
            await this.#connection.connect();
            console.log("Connection to MongoDB is done");
        }
        catch (error){
            console.log(`${this.getHost}${this.user}:${this.getPass}@${this.getCluster}:${this.port}/${this.getDbName}`)
            console.error(`Error connecting to MongoDB:${error.message}`, error);
            await this.reconnect(); //reconnect database if there is troubles
            process.exit(1);
        }
    }
    // Reconnect
    async reconnect() {
        console.log("Reconnecting to MongoDB...");
        await this.open();
    }
    // Close connection
    async close() {
        try {
            await this.#connection.close();
            console.log("Connection to MongoDB closed successfully.");
        } 
        catch (error) {
            console.error("Error closing connection to MongoDB:", error);
        }
    }
    // Get the database object
    get getDb() {
        if (!this.#connection) { //confirm database connection
            console.warn("No active database connection.");
        }
        return this.#connection.db(this.getDbName);
    }
    //Get each collection
    getCollection(collectionName) {
        if (!this.#connection) {
          throw new Error("No hay conexión activa a la base de datos.");
        }
        return this.#connection.db(this.getDbName).collection(collectionName);
      }
}