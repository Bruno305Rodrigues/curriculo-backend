
const Sequelize = require('sequelize');
const Contato = require('../app/models/Contato')
const config = require('../config/database');

const models = [
    Contato,
]

class Database {    
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }
}

module.exports = new Database();