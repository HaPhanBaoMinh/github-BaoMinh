const mongoose = require("mongoose");
const { Schema } = mongoose;

const posterModels = new Schema({
    poster: {
        type: String,
        default: ''
        // [
        //     {"img1"},
        //     {"img2"}
        // ]
    }
})

const myDB = mongoose.connection.useDb('Spiderrum_Store');
const Poster = myDB.model('Poster', posterModels);

module.exports = Poster;