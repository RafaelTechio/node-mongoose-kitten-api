const { Router } = require('express');
const KittenController = require('../controllers/kitten.controller');
const createKittenValidation = require('../validations/create-kitten.validation');
const updateKittenValidation = require('../validations/update-kitten.validation');

const router = Router();

router.get('/', KittenController.list);
router.get('/:id', KittenController.find);
router.post('/', ...createKittenValidation, KittenController.create);
router.put('/:id', ...updateKittenValidation, KittenController.update);
router.delete('/:id', KittenController.delete);

module.exports = router;
