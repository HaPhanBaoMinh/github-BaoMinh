const confirmList = require("../Models/HistoryOrder/historyOrder");
const confirmOrderItem = require("../function/comfirmOrder")

const dateNow = require("../function/handleDate");

const addToHistory = async (body) => {
    const comfirm = {
        orderDate: body.orderDate,
        orderListItem: body.cart,
        userInfo: body.contactInfo,
        confirmDay: dateNow(),
        total: body.total,
    }

    

    const confirmProduct = new historyOrder(comfirm);
    try {
        await confirmProduct.save(); 
    } catch (error) {
        res.status(400).send()
    }
    
}

const deleteHistory = async (req, res) => {
    const id = req.body.id;
    try {
        
        confirmList.findByIdAndDelete(id);
        confirmOrderItem(id, false);
        res.status(200).send()
    } catch (error) {
        res.status(400).send
    }
}

module.exports = {addToHistory}