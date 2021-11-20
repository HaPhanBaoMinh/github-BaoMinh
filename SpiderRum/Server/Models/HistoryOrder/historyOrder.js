const mongoose = require("mongoose");
const { Schema } = mongoose;

const confirmListListSchema = new Schema({
   orderDate: {
       type: Object,
       default: {}
   }, 
   orderListItem: Array,
   userInfo: Object,
   confirmDay: {
       type: Object,
       default: {}
   },
   total: Number
})

const myDB = mongoose.connection.useDb("Result");
const confirmList = myDB.model("historyorder", confirmListListSchema);

module.exports = confirmList;