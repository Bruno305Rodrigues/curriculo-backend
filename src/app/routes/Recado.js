const { Router } = require('express') ;
const RecadoController = require('../controllers/recadosController');

const routes = new Router();

routes.get('/recados',RecadoController.index);
routes.get('/recados/:id', RecadoController.show);
routes.post('/recados', RecadoController.store);

module.exports = routes;