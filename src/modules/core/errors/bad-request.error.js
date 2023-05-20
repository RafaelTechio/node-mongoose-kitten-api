const ApiError = require('./api.error');

module.exports = class BadRequestError extends ApiError {
    constructor(message) {
        super(message, 400);
    }
};
