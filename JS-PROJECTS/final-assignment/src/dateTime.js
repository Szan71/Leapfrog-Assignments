setDateTime();
setInterval(() => {
    setDateTime();
}, 5000);

function setDateTime() {
    var today = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var hours = (today.getHours() < 10 ? '0' : '') + (today.getHours());
    var minutes = (today.getMinutes() < 10 ? '0' : '') + (today.getMinutes());
    var time = hours + ":" + minutes;
    var date = days[today.getDay()] + ", " + months[today.getMonth()] + ' ' + today.getDate();

    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}