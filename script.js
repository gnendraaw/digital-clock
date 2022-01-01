function clock()
{
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var Years = document.getElementById("years");
    var date = document.getElementById("date");
    var months = ["January", "February", "March", "May", "June", "July", "August", "September", "November", "December"];
    var month_text = document.getElementById("month");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var y = new Date().getFullYear();
    var d = new Date().getDate();
    var mo = new Date().getMonth();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    Years.innerHTML = y;
    date.innerHTML = d;
    month_text.innerHTML = months[mo];

    var interval = setInterval(clock, 1);
}
