const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    acount: {
        type: Array,
        default: [],
    }
    // [
    //     {
    //         taikhoan: "haphanbaominh",
    //         matkhau: "minh1292002"
    //     },
    //     {
    //         taikhoan: "haphanbaominh",
    //         matkhau: "minh1292002"
    //     },
    // ]
})

const adminAccount = mongoose.model("adminAccount", adminSchema);

module.exports = adminAccount;