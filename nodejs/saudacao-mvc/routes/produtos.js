var express = require('express');
var router = express.Router();
const produtosController = require('../controllers/produtosController');

/* GET users listing. */
router.get('/',produtosController.produtos);
router.get('/camisetas',produtosController.camisetas);
router.get('/cadastrar',produtosController.formCadastrar);
router.post('/cadastrar',produtosController.cadastrar);

module.exports = router;
