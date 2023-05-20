require('express-async-errors');
const { Router } = require('express');

const KittenRouter = require('../../kitten/router');

const router = Router();

router.use('/kitten/', KittenRouter);

module.exports = router;
