// ui
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
    progresscontainer =document.getElementById('progress-container'),
    progress =document.getElementById('progress');

const audio =document.getElementById('audio');

const cover =document.getElementById('cover');

const prvebtn = document.getElementById('prev'),
    playbtn =document.getElementById('play');
    nextbtn = document.getElementById('next');

let songindex=0;

// Song Title
const  songs =['sample1','sample2','sample3'];
// console.log(songs[songidex]);
loadsong(songs[songindex]);
function loadsong(music){
    console.log(music);

    title.innerText = music;
    audio.src=`music/${music}.mp3`;
    cover.src=`img/${music}.jpg`;
}
// Play Song
playbtn.addEventListener('click',()=>{
    // console.log('hay');
   const isplaying = musiccontainer.classList.contains('play');

    if(isplaying){
        pausesong();
    }else {
        playsong();
    }
});

//Play Sonng
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
    playbtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause();
}