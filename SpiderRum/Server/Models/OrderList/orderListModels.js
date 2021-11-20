const mongoose = require("mongoose");
const { Schema } = mongoose;
const dateNow = require("../../function/handleDate");

const orderListModels = new Schema({
    contactInfo: {
        customerName: String,
        email: String,
        address: {
            province: String, // Tỉnh/TP
            district: String, //Huyện
            town: String, // Thị trấn
            detailedAddress: String // Số nhà - Đường - Khu phố
        },
        phoneNumber: String,
    },
    cart: {
        type: Array,
        default: [
            {
                productName: String,
                count: Number,
                bookId: String,
            }
        ]
        // [
        //     {    
        //         productName: "Tuổi trẻ đáng giá bao nhiêu",
        //         count: 2
        //         bookId: "TTDGBN"
        //     },
        //     {
        //         productName: "Trên đường băng",
        //         count: 5
        //         bookId: "TDB"
        //     }
        // ]
    },
    confirm: {
        type: Boolean,
        default: false
    },
    orderDate: {
        type: Object,
        default: dateNow()
    },
    total: Number

})

const myDB = mongoose.connection.useDb('Order_List');
const orderList = myDB.model("orderList", orderListModels);

module.exports = orderList;