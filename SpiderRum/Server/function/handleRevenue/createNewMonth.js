const monthRevenueModels = require("../../Models/Trading_report/monthly");

const createNewMonth = async() => { // Tạo Object data cho tháng mới
    await monthRevenueModels.findOneAndUpdate({isCurrentMonth: true}, {isCurrentMonth: false});
    const newMonth = new monthRevenueModels({});
    try {
        await newMonth.save(); 

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createNewMonth;
