const dateNow = () => {
    const date = new Date;
    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    return {
        day: weekday[date.getDay()],
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }

}

module.exports = dateNow;