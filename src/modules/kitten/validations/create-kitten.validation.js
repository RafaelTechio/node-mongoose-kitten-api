const validator = require('express-validator');

module.exports = [validator.body('color').notEmpty().escape(), validator.body('name').notEmpty().escape()];
