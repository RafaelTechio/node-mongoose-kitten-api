const Controller = require('../../core/controllers/controller');
const kittenServiceProvider = require('../providers/kitten.service.provider');

module.exports = class KittenController extends Controller {
    static async list(req, res) {
        const kittenService = kittenServiceProvider();
        res.json(await kittenService.list());
    }

    static async find(req, res) {
        const kittenService = kittenServiceProvider();
        res.json(await kittenService.findById(req.params.id));
    }

    static async create(req, res) {
        Controller.validationResult(req);
        const { name, color } = Controller.matchData(req);
        const kittenService = kittenServiceProvider();
        res.json(await kittenService.create(name, color));
    }

    static async update(req, res) {
        const kittenService = kittenServiceProvider();
        await kittenService.update({
            ...Controller.matchData(req),
            _id: req.params.id,
        });

        res.json(await kittenService.findById(req.params.id));
    }

    static async delete(req, res) {
        const kittenService = kittenServiceProvider();
        res.json(await kittenService.delete(req.params.id));
    }
};
