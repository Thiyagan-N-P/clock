let sec = 0;
let min = 0;
let hour = 0;
let d = new Date();

setInterval(
    function () {
        d = new Date();
        sec = d.getSeconds() * 6;
        min = d.getMinutes() * 6;
        hour = d.getHours() * 30 + (Math.round(min / 12));
        document.getElementById("c").style.transform = "rotate(" + sec + "deg)";
        document.getElementById("a").style.transform = "rotate(" + min + "deg)";
        document.getElementById("b").style.transform = "rotate(" + hour + "deg)";
    }, 1000
)