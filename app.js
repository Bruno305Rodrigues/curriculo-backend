const express = require('express') ;
const cors = require('cors');
require('./database/index.js');

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
        this.server.use();           
    }
}

module.exports = new App().server;