const KittenSchema = require('../schemas/kitten.schema');
const MongoRepository = require('../../core/repositories/mongo.repository');

class KittenMongoRepository extends MongoRepository {}

module.exports = new KittenMongoRepository(KittenSchema, 'Kitten');
