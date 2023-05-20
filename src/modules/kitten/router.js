const { Router } = require('express');

const kittenRouter = require('./routers/kitten.router');

const router = Router();

router.use('/', kittenRouter);

module.exports = router;
