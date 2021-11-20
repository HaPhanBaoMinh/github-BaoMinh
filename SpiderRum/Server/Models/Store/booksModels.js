const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksModels = new Schema({
    bookName: {
        type: String,
        default: ''
    },
    bookQuantity: Number,
    bookImages: {
        type: String,
        default: ""
    },
    bookPrice: {
        oldPrice: {
            type: Number,
            default: 0
        }, 
        newPrice:  {
            type: Number,
            default: 0
        }
    },
    bookDescription: {
        type: String,
        default: ''
    },
    booktags: {
        type: Array,
        default: []
    },
    bookId: {
        type: String,
        default: ''
    }, 
    author: {
        type: String,
        default: ''
    },
})

const myDB = mongoose.connection.useDb('Spiderrum_Store');
const booksList = myDB.model("product", booksModels);
module.exports = booksList;

