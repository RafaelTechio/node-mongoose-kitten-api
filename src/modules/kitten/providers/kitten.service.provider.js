const kittenMongoRepository = require('../repositories/kitten.mongo.repository');
const KittenService = require('../services/kitten.service');

module.exports = function kittenServiceProvider() {
    return new KittenService(kittenMongoRepository);
};
