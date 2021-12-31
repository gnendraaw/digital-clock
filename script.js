function clock()
{
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var Years = document.getElementById("years");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var y = new Date().getFullYear();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    Years.innerHTML = y;

    var interval = setInterval(clock, 1);
}