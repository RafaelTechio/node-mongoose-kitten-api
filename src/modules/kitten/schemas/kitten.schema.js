const mongoose = require('mongoose');

const KittenSchema = new mongoose.Schema({
    name: String,
    color: String,
});

module.exports = KittenSchema;
