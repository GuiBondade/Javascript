var express = require('express');
var router = express.Router();
const clientesController = require('../controllers/clientesController');

/* GET users listing. */
router.get('/',clientesController.clientes);
router.get('/login',clientesController.login);
router.post('/logado', clientesController.logado);

module.exports = router;