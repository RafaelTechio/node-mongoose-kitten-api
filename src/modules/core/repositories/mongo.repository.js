const mongoose = require('mongoose');
const InternalServerError = require('../../core/errors/internal-server-error');
const NotFoundError = require('../errors/not-found.error');

module.exports = class MongoRepository {
    constructor(schema, collectionName) {
        this.schema = schema;
        this.collectionName = collectionName;
        this.model = mongoose.model(this.collectionName, this.schema);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(data) {
        if (!data._id) {
            throw new InternalServerError('Object must have and Id to been updated');
        }

        try {
            return await this.model.updateOne({ _id: data._id }, data);
        } catch (err) {
            throw new NotFoundError('Object not found');
        }
    }

    async delete(id) {
        if (!id) {
            throw new InternalServerError('Object must have and Id to been deleted');
        }

        try {
            return await this.model.findByIdAndDelete(id);
        } catch (err) {
            throw new NotFoundError('Object not found');
        }
    }

    async findById(id) {
        if (!id) {
            throw new InternalServerError('Object must have and Id to been found');
        }

        try {
            return await this.model.findById(id);
        } catch (err) {
            throw new NotFoundError('Object not found');
        }
    }

    async list(filters, sort = null, select = null, limit = null) {
        const query = this.model.find(filters);

        if (sort) {
            query.sort(sort);
        }

        if (select) {
            query.select(select);
        }

        if (limit) {
            query.limit(limit);
        }

        return await query.exec();
    }
};
