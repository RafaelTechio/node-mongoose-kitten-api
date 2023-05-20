const InternalServerError = require('../../core/errors/internal-server-error');
const kittenMongoRepository = require('../repositories/kitten.mongo.repository');

const Service = require('../../core/services/service');

module.exports = class KittenService extends Service {
    constructor(repository) {
        super(repository);
    }

    async create(name, color) {
        if (!name) {
            throw new InternalServerError('Kitty must have a name');
        }

        if (!color) {
            throw new InternalServerError('Kitty must have an color');
        }

        return await this.repository.create({
            name,
            color,
        });
    }
};
