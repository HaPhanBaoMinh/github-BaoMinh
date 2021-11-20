const mongoose = require("mongoose");
const {Schema} = mongoose;
const dateNow = require("../../function/handleDate");

const montRevenueSchema = new Schema({
    createMonth: {
        type: Object,
        default: dateNow().month
    },
    total: {
        type: Number,
        default: 0
    },
    isCurrentMonth: {
        type: Boolean,
        default: true
    }
    
})

const myDB = mongoose.connection.useDb("Trading_report");
const monthRevenueModels = myDB.model("month", montRevenueSchema);

module.exports = monthRevenueModels;