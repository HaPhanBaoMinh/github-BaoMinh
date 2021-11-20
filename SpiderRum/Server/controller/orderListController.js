const orderList = require("../Models/OrderList/orderListModels");
const {addToHistory} = require("../controller/historyOrderController");
const totalPrice = require("../function/totalPrice");
const {confirmOrderItem} = require("../function/comfirmOrder");
const cancelOrder = require("../Models/HistoryOrder/cancelListModels");
const {addToCancelList} = require("../controller/cancelListController");

const getOrderList = async (req, res) => {
    const orderlist = await orderList.find();
    try {
        res.status(200).json(orderlist)
    } catch (error) {
        console.log(error.message);
    }
}

const createOrderList = async (req, res) => {
    const reqBody = req.body;
    const total = await totalPrice(reqBody.cart);

    const postOrder = await {...reqBody, total: total}

    const postOrderTotal = await new orderList(postOrder);
    console.log(postOrder);

    try {
        await postOrderTotal.save();
        res.status(200).json({"Result":"Create successful!"})
    } catch (error) {
        res.status(400).send()
    }
}

const updateOrderList = async (req, res) => {
    const id = req.body.id;
    const updatedOrder = req.body;
    try {
        await orderList.findByIdAndUpdate(id, updatedOrder, {new: true});
        res.status(200).json({"Result":"Update successful!"});
    } catch (error) {
        res.status(400).send();
    }
}

const deleteOrderList = async (req,res) => {
    const id = req.body.id;
    try {
        await orderList.findByIdAndDelete(id); 
        res.status(200).json({"Result":"Delete successful!"})       
    } catch (error) {
        res.status(400).send();
    }
}

const confirmOrder = async (req, res) => { //id
    const id = await req.body.id;
    const OrderItem = await orderList.findById(id);
    // console.log(OrderItem)
    try {
        await addToHistory(OrderItem);
        await confirmOrderItem(id, true);
        // await orderList.findByIdAndDelete(id);
        res.status(200).json({"Result":"Confirmed Order"})       
    } catch (error) {
        res.status(400).send();
    }
}

const cancelOrderItem = async (req, res) => { //id
    const id = await req.body.id;
    const cancelItem = await orderList.findById(id);
    // console.log(cancelItem)  
    try {
        await addToCancelList(cancelItem);
        await confirmOrderItem(id, false);
        res.status(200).json({"Result":"Cancel Order"})       
    } catch (error) {
        res.status(400).send();
    }
}



module.exports = {getOrderList, createOrderList, updateOrderList, deleteOrderList, confirmOrder, cancelOrderItem};       