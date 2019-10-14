const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
    }
}, {timestamps: true});

module.exports = Category = mongoose.model('categories', CategorySchema);
