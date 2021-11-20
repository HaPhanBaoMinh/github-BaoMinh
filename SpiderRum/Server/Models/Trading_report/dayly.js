const mongoose = require("mongoose");
const {Schema} = mongoose;
const dateNow = require("../../function/handleDate");

const daylyRevenueSchema = new Schema({
    date: {
        type: Object,
        date: dateNow()
    },
    total: {
        type: Number,
        default: 0
    }
})

const myDB = mongoose.connection.useDb("Trading_report");
const daylyRevenueModels = myDB.model("today", daylyRevenueSchema);

module.exports = daylyRevenueModels;