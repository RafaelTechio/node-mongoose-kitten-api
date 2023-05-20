const ApiError = require('./api.error');

module.exports = class NotFoundError extends ApiError {
    constructor(message) {
        super(message, 404);
    }
};
