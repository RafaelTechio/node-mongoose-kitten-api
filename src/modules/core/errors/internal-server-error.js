const ApiError = require('./api.error');

module.exports = class InternalServerError extends ApiError {
    constructor(message) {
        super(message, 500);
    }
};
