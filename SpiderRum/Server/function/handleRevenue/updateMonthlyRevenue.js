const daylyRevenueModels = require("../../Models/Trading_report/dayly");
const dateNow = require("../handleDate");
const monthRevenueModels = require("../../Models/Trading_report/monthly");

const updateRevenuemonthly = async () => { // Cập nhật doabg thu của tháng hiện tại
    // const month = dateNow().month == 1 ? 12 : dateNow().month - 1;
    const daylyList = await daylyRevenueModels.find( {"date.month": dateNow().month});
    let totalRevenueOfMonth = 0;
    await daylyList.map(item => {
        totalRevenueOfMonth += item.total;
    })
    await monthRevenueModels.findOneAndUpdate({isCurrentMonth: true}, {total: totalRevenueOfMonth});
    // await console.log(month);
}

module.exports = updateRevenuemonthly;
