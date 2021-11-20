const cancelOrder = require("../Models/HistoryOrder/cancelListModels");

const dateNow = require("../function/handleDate");

const addToCancelList = async (body) => {
    const cancel = {
        orderDate: body.orderDate,
        orderListItem: body.cart,
        userInfo: body.contactInfo,
        cancelDay: dateNow(),
        total: body.total,
    }

    const cancelProduct = new cancelOrder(cancel);
    try {
        await cancelProduct.save(); 
    } catch (error) {
        res.status(400).send()
    }
    
}


module.exports = {addToCancelList}