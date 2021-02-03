// Сюда прописываешь время таймера в том же формате
var countDownDate = new Date("Feb 28, 2021 16:34:00").getTime();

var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = "0" + days;
}
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(hours < 10) {
        hours = "0"+ hours;
    }
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    
document.getElementById("days").innerHTML = days + "д."
document.getElementById("hours").innerHTML = hours + "ч."
document.getElementById("mins").innerHTML = minutes + "м."
document.getElementById("secs").innerHTML = seconds + "с."
    
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "Набор начнется в ближайшее время";
}
}, 1000);