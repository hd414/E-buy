const mongoose = require('mongoose');


const CategoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentid: {
        type: String
    }
},
    { timestamps: true }
);

const Category = mongoose.model('Category', CategoryShema);

module.exports = Category;