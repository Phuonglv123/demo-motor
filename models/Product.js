const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    },
    description: {
        required: true,
        type: String,
        maxlength: 100000
    },
    productDetail: {
        required: true,
        type: String,
        maxlength: 200000
    },
    price: {
        required: true,
        type: Number,
        maxlength: 255
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    SubCategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
    },
    shipping: {
        required: true,
        type: Boolean
    },
    available: {
        required: true,
        type: Boolean
    },
    images: {
        type: Array,
        default: []
    }
}, {timestamps: true});

module.exports = Product = mongoose.model('products', productSchema);
