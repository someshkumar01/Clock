setInterval(() => {
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30 * htime + mtime / 2 + stime / 120;
    let mrotation = 6 * mtime + stime / 10;
    let srotation = 6 * stime;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);