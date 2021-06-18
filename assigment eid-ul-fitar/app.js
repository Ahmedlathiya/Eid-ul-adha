function cdtd() {
    var xmas = new Date("july 21, 2021 00:01:00");
    var now = new Date();
    var timeDiff = xmas.getTime() - now.getTime();
    if (timeDiff <= 0) {
                clearTimeout(timer);
        document.write("Ei-ul-Fitar (MUBARAK HO)!");
       
        }
    var sec = Math.floor(timeDiff / 1000);
    var mints = Math.floor(sec / 60);
    var hours = Math.floor(mints / 60);
    var days = Math.floor(hours / 24);
    hours %= 24;
    mints %= 60;
    sec %= 60;
    var timer = setTimeout('cdtd()',1000);
    document.getElementById('make').innerHTML = days + " : " + hours + " : " + mints + " : " + sec
    document.getElementById('show2').innerHTML = "Days | Hours | Minutes | Seconds"
}

cdtd();