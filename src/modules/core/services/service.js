module.exports = class Service {
    constructor(repository) {
        this.repository = repository;
    }

    async update(data) {
        return await this.repository.update(data);
    }

    async delete(id) {
        return await this.repository.delete(id);
    }

    async create(data) {
        return await this.repository.create(data);
    }

    async findById(id) {
        return await this.repository.findById(id);
    }

    async list(filters, orders, select, limit) {
        return await this.repository.list(filters, orders, select, limit);
    }
};
