const orderList = require("../Models/OrderList/orderListModels");

const confirmOrderItem = async (id, check) => {
    const orderItem = await orderList.findById(id);
    const confirmOrder = await {...orderItem._doc, confirm: check};
    await orderList.findByIdAndUpdate(id, confirmOrder, {new: true});

}

module.exports = {confirmOrderItem}