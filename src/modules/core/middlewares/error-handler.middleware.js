const ApiError = require('../errors/api.error');
const InternalServerError = require('../errors/internal-server-error');

module.exports = function errorHandler(err, req, res, next) {
    if (err instanceof ApiError && !(err instanceof InternalServerError)) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
        });
    } else {
        console.log(`Error at ${new Date().toISOString()}: `, err);
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};
