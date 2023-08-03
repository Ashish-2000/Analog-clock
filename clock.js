let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

function displayTime() {
    let date = new Date();

   let hh = date.getHours();
   let mm = date.getMinutes();
   let ss = date.getSeconds();

    let hrot = 30 * hh + mm / 2;
    let mrot = 6 * mm;
    let srot = 6 * ss;

    h.style.transform = `rotate(${hrot}deg)`;
    m.style.transform = `rotate(${mrot}deg)`;
    s.style.transform = `rotate(${srot}deg)`;
}

setInterval(displayTime, 1000);