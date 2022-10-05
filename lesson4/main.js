let divMain = document.getElementById('main');
let track = document.createElement('audio');
let track_index = 0;
let isPlaying = false;

let playList = [
    {
        id: "vergil",
        song: "./songs/vergil.mp3",
        img: "./img/vergil.jpg",
        play: "./img/play.png",
        pause: "./img/pause.png",
    },

    {
        id: "dante",
        song: "./songs/dante.mp3",
        img: "./img/dante.jpg",
        play: "./img/play.png",
        pause: "./img/pause.png",
    },

    {
        id: "nero",
        song: "./songs/nero.mp3",
        img: "./img/nero.jpg",
        play: "./img/play.png",
        pause: "./img/pause.png",
    },

    {
        id: "dmc",
        song: "./songs/dmc.mp3",
        img: "./img/dmc.png",
        play: "./img/play.png",
        pause: "./img/pause.png",
    },

    {
        id: "rr",
        song: "./songs/rr.mp3",
        img: "./img/rr.gif",
        play: "./img/play.png",
        pause: "./img/pause.png",
    },
];

function loadTrack(track_index) {
    track.src = playList[track_index].song;
    track.load();
    isPlaying = true
    playAudio()
}    

function playAudio() {
    track.play();
    isPlaying=true;
}

function pauseAudio() {
  track.pause();
  isPlaying=false;
}

function addImage(track_index) {
    let trackImg = playList[track_index].img;
    let pauseTrack = playList[track_index].pause;

    let img = document.createElement('img');
    let pause = document.createElement('img');

    img.id = 'img';
    pause.id ='pause';

    img.src = trackImg;
    pause.src = pauseTrack;

    pause.style.display = "block";
    pause.style.position = "absolute";
    pause.style.bottom = "45%";
    pause.style.left = "130px";
    pause.style.width = "200px";
    pause.style.height = "200px";

    img.style.width = "100%";
    img.style.height = "100%";

    if (!isPlaying) {
        document.getElementById('img').remove();
        document.getElementById('pause').remove();
    } else divMain.append(img, pause);
}

function player() {
    track.paused ?  playAudio()  : pauseAudio();
    track.paused ? document.getElementById("pause").src="./img/play.png" : document.getElementById("pause").src="./img/pause.png";
}
