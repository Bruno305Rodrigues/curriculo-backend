const { Router } = require('express') ;
const ContatoController = require('../controllers/contatoController');

const routes = new Router();

routes.get('/', ContatoController.index);
routes.get('/contatos/:id', ContatoController.show);
routes.post('/contatos', ContatoController.store);

module.exports = routes;