const daylyRevenueModels = require("../../Models/Trading_report/dayly");
const confirmList = require("../../Models/HistoryOrder/historyOrder");
const dateNow = require("../../function/handleDate");

const updateRevenuedayly = async (req, res) => {
    const confirmListdayly = await confirmList.find({confirmDay: dateNow()});
    let totalRevenue = 0;
    await confirmListdayly.map(item => {
        totalRevenue += item.total;
    })

    const revenue = await {
        total: totalRevenue,
        date: dateNow()
    }
    // console.log(totalRevenue);
    const sumRevenue = new daylyRevenueModels(revenue);
    try {
        await sumRevenue.save();
    } catch (error) {
        console.log(error.message);
    }
    res.status(200).json({totalRevenue: totalRevenue});
}

module.exports = {updateRevenuedayly};