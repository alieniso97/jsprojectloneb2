// // ui
// const musiccontainer = document.getElementById('music-container');
//
// const title = document.getElementById('title'),
//     progresscontainer =document.getElementById('progress-container'),
//     progress =document.getElementById('progress');
//
// const audio =document.getElementById('audio');
//
// const cover =document.getElementById('cover');
//
// const prvebtn = document.getElementById('prev'),
//     playbtn =document.getElementById('play');
//     nextbtn = document.getElementById('next');
//
// let songindex=0;
//
// // Song Title
// const  songs =['sample1','sample2','sample3'];
// // console.log(songs[songidex]);
// loadsong(songs[songindex]);
// function loadsong(music){
//     console.log(music);
//
//     title.innerText = music;
//     audio.src=`music/${music}.mp3`;
//     cover.src=`img/${music}.jpg`;
// }
// // Play Song
// playbtn.addEventListener('click',()=>{
//     // console.log('hay');
//    const isplaying = musiccontainer.classList.contains('play');
//
//     if(isplaying){
//         pausesong();
//     }else {
//         playsong();
//     }
// });
//
// //Play Sonng
// function playsong(){
//     musiccontainer.classList.add('play');
//
//     playbtn.querySelector('i.fas').classList.remove('fa-play');
//     playbtn.querySelector('i.fas').classList.add('fa-pause');
//     audio.play();
// }
// // Pause Song
// function pausesong(){
//     musiccontainer.classList.remove('play');
//     playbtn.querySelector('i.fas').classList.add('fa-play');
//     playbtn.querySelector('i.fas').classList.remove('fa-pause')
//     audio.pause();
// }
// UI
const musiccontainer=document.getElementById('music-container');

const title=document.getElementById('title'),
    progresscontainer=document.getElementById('progress-container'),
    progress=document.getElementById('progress');

const audio=document.getElementById('audio');

const cover=document.getElementById('cover');

const prevbtn=document.getElementById('prev'),
    playbtn=document.getElementById('play'),
    nextbtn=document.getElementById('next');

let songindex=0;

// Song Title
const songs=['sample1','sample2','sample3'];

// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){
    // console.log('hey');

    title.innerText = music;
    audio.src=`music/${music}.mp3`;
    cover.src=`img/${music}.jpg`;
}

// Event Listener for Play song
playbtn.addEventListener('click',()=>{
    // console.log('hey');


    const isplaying=musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

// Play Song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause Song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// ChangeSong
prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

// PreviousSong
function previoussong(){
    songindex--;
    // console.log(songindex);

    if(songindex < 0){
        songindex= songs.length - 1;
    }

    loadsong(songs[songindex]);
    playsong();
}

// next song
function nextsong(){
    // console.log('hey');
    // songindex +=1;
    songindex++;

    if(songindex > songs.length - 1){
        songindex= 0;
    }

    loadsong(songs[songindex]);
    playsong();
}

// Update Progress Bar
function updateprogress(e){
    // currentTimeဆိုတဲ့ object လက်ရှိrunနေတဲ့ အချိန်ကိုmilli sec နဲ့ပြ
    // console.log(audio.currentTime);
    // သီချင်းရဲ့ကြာချိန်
    // console.log(audio.duration);

    // Method 1
    // width percent ပေးချင်လို့
    // လက်ရှိရောက်နေတဲ့အချိန်ကို ကြာချိန်နဲ့စား ပြီးတော့ 0 to 100ကြားလိုချင်လို့ 100နဲ့မြှောက်ပေး
    //  မဟုတ်ရင် milli sec အနေနဲ့ပဲထွက်တော့ width နေရာမှာထည့်ရင် အဆင်မပြေနိုင်

    // const progresspercent = (audio.currentTime / audio.duration) *100;
    // console.log(progresspresent);
    // progress.style.width=`${progresspercent}%`;

    // Method 2
    // console.log(e.target);
    // this က အဲ့ဒီ elementကိုလှမ်းခေါ်တာ but regular function မှာပဲအလုပ်လုပ် arrow function မှာအလုပ်မလုပ်
    // console.log(this);
    // console.log(e.target);
    // console.log(e.srcElement);

    // Method2
    // e.targetကလည်း သူ့ရဲ့ element ကိုဖော်ပြတာပဲaudio ကိုတိုက်ရိုက်လှမ်းခေါ်တာနဲ့အတူတူပဲ
    // const currentTime= e.target.currentTime;
    // const duration=e.target.duration;
    // const progresspercent=(currentTime/duration)*100;
    // progress.style.width=`${progresspercent}%`;

    // Method3

    // e.targetထဲက object name နဲ့တော့ တူရမယ်
    // const {currentTime}=e.target;
    // const {duration}=e.target;
    // const progresspercent=(currentTime/duration)*100;
    // progress.style.width=`${progresspercent}%`;

    // Method 4

    const {currentTime,duration} = e.target;
    const progresspercent=(currentTime/duration)*100;
    progress.style.width=`${progresspercent}%`;
}

// time play and stop update
// timeupdateအချိန်ပြောင်းလဲတဲ့အပေါ်မူတည်ပြီး function အလုပ်လုပ်စေချင်
audio.addEventListener('timeupdate',updateprogress);

// click on progress Bar
progresscontainer.addEventListener('click',setprogress);

// Set Progress Bar
function setprogress(e){
    // console.log(e.target);

    // prgress containerရဲ့ widthကိုလှမ်းကောက်
    const width= e.target.clientWidth;
    // console.log(width);

    const clickx=e.offsetX;
    // console.log(clickx);

    const duration= audio.duration;
    // console.log(duration);

    // currentTime ကို overwriteပြန်လုပ်တာ
    audio.currentTime= (clickx/width) * duration;

}