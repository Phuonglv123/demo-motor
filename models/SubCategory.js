const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubCategory = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true
    }
}, {timestamp: true});
const subCategory = mongoose.model("subCategory", SubCategory, "subCategory");
module.exports = subCategory;
