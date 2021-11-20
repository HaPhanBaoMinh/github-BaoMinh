const express = require("express");
const {getOrderList, createOrderList, updateOrderList, deleteOrderList, confirmOrder, cancelOrderItem} = require("../controller/orderListController")
const {updateRevenuedayly} = require("../controller/Trading_report/daylyRevenueController");
const {updateRevenuemonthly, createNewMonth} = require("../controller/Trading_report/monthRevenueController");

const orderListRouter = express.Router();

orderListRouter.put("/comfirm", confirmOrder); // Test
orderListRouter.put("/cancel", cancelOrderItem); // Test
orderListRouter.get("/revenue/date", updateRevenuedayly); // Test
orderListRouter.get("/revenue/month", updateRevenuemonthly); // Test
orderListRouter.post("/revenue/month", createNewMonth); // Test

orderListRouter.get("/", getOrderList);
orderListRouter.post("/", createOrderList);
orderListRouter.put("/", updateOrderList);
orderListRouter.delete("/", deleteOrderList);

module.exports = orderListRouter;