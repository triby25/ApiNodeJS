var express = require('express');
var router = express.Router();
var controller = require('../controller/carro.controller');

router.get('/', controller.getAll;
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
