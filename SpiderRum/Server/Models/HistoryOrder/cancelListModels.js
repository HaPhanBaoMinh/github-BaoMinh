const mongoose = require("mongoose");
const { Schema } = mongoose;

const cancelListSchema = new Schema({
   orderDate: {
       type: Object,
       default: {}
   }, 
   orderListItem: Array,
   userInfo: Object,
   cancelDay: {
       type: Object,
       default: {}
   }, 
   total: Number
})

const myDB = mongoose.connection.useDb("Result");
const cancelOrder = myDB.model("cancelorder", cancelListSchema);

module.exports = cancelOrder;