const mongoose = require('mongoose');

const Connection = require('./connection');
const environmentVars = require('../config/environment.config');

module.exports = class MongoConnection extends Connection {
    constructor(user = environmentVars.MONGO_DB_USER, pass = environmentVars.MONGO_DB_PASS, ip = environmentVars.MONGO_DB_ADDRESS, database = environmentVars.MONGO_DB_DATABASE) {
        super(user, pass, ip, database);
    }

    async connect() {
        try {
            const mongoUrl = `mongodb+srv://${this.user}:${this.pass}@${this.ip}/${this.database}?retryWrites=true&w=majority`;

            mongoose.set('strictQuery', true);
            mongoose.connect(mongoUrl);
            this.connected = true;

            console.log(`Mongo connected at ${this.database} database`);
        } catch (error) {
            console.log('Error: ', error);
            this.connected = false;
        }
    }
};
