const { Router } = require('express');

const kittenRouter = require('./kitten.router');

const router = Router();

router.use('/', kittenRouter);

module.exports = router;
