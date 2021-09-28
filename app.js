function clock() {
    var s = new Date();
    var date = s.getDate();
    var month = s.getMonth();
    var month_array = ["jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    month = month_array[month];
    var year = s.getFullYear();
    var hr = s.getHours();
    var min = s.getMinutes();
    var sec = s.getSeconds();
    var session = "AM";
    var wish;
    if (hr < 12) {
        var wish = "Good Morning";
    }
    if (hr >= 12 && hr <= 18) {
        var wish = "Good Evening";
    }
    if (hr >= 18 && hr <= 24) {
        var wish = "Good night";
    }
    if (hr == 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr = hr - 12;
        session = "PM";
    }
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;



    var time = hr + ":" + min + ":" + sec + "" + session;
    document.getElementById("greeting").innerHTML = wish;
    document.getElementById("digitalclock").innerHTML = time;
    document.getElementById("date").innerHTML = date + " " + month + " " + year;

}
clock();
setInterval(clock, 1000);