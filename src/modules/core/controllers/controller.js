const { validationResult, matchedData } = require('express-validator');
const BadRequestError = require('../errors/bad-request.error');

module.exports = class Controller {
    static matchData(req) {
        const result = matchedData(req);
        return result;
    }

    static validationResult(req) {
        const result = validationResult(req);

        if (!result.isEmpty()) {
            throw new BadRequestError(result.array());
        }
    }
};
