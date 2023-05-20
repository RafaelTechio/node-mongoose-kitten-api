const validator = require('express-validator');

module.exports = [validator.body('color'), validator.body('name')];
