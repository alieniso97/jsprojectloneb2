// UI
const days =document.getElementById("days");
const hours=document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const year = document.getElementById("year");

const countdown =document.getElementById("countdown");
const  loading = document.getElementById("loading");

const  currentyear = new Date().getFullYear();
// console.log(currentyear);

// const newyeartime = new Date(`January 01 2022 00:00:00`);
const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);
console.log(newyeartime);


function updatecountdown(){
    const currenttime = new Date();

    const diff = newyeartime -currenttime;
    // console.log(diff);
// day =>             milisecond /  s/  m / h /d
    const d = Math.floor(diff /1000/60/60/24);
    // console.log(d);

    // hours
    const h = Math.floor(diff/1000 / 60 / 60)%24;
    // console.log(h);

    const m = Math.floor(diff /1000 / 60) % 60;
    // console.log(m);

    const s = Math.floor(diff / 1000) % 60;
    // console.log(s);
    const mili = Math.floor(diff%1000)/10;
    // console.log(mili);

    days.textContent = d;
    hours.textContent= h <10 ? "0" + h : h;
    minutes.textContent= m <10 ? "0" + m : m;
    seconds.textContent= s < 10 ? "0" + s : s;
}
// updatecountdown();
// set interval => function reload = အချိန်ပီးရင်ဝင်လာတာ

setInterval(updatecountdown,1000);
//ဒီအချိန်ပီးရင် ထွက်သွားတာ
setTimeout(()=>{
    loading.remove();
    //
    countdown.style.display="flex";
},1000);
