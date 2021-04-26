const express = require('express') ;
const cors = require('cors');
const ContatoRoute = require( './app/routes/Contato');
const RecadoRoute = require( './app/routes/Recado');
require('./database/index');

class App {
    constructor() {
        this.server = express();
        this.config();
        this.routers();        
    }

    config() {
        this.server.use(express.json());
        this.server.use(cors());        
    }

    routers() {
        this.server.use(ContatoRoute);
        this.server.use(RecadoRoute);          
    }
}

module.exports = new App().server;