var playingAnyOne=false;
var playingID;
var GIFID;
function pauseAnyPlaying(){
    var music=document.getElementById(playingID);
    var playingAnyGIF=document.getElementById(GIFID);
    music.pause();
    music.currentTime=0;
    music.removeAttribute('controls');
    playingAnyGIF.style.display="none";
}


function play1() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF1");
    let music = document.getElementById("song-1-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-1-music";
        GIFID="playingGIF1";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}



function play2() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF2");
    let music = document.getElementById("song-2-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-2-music";
        GIFID="playingGIF2";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}



function play3() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF3");
    let music = document.getElementById("song-3-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-3-music";
        GIFID="playingGIF3";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}



function play4() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF4");
    let music = document.getElementById("song-4-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-4-music";
        GIFID="playingGIF4";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}



function play5() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF5");
    let music = document.getElementById("song-5-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-5-music";
        GIFID="playingGIF5";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}



function play6() {
    let playing = false;
    let playingGIF = document.getElementById("playingGIF6");
    let music = document.getElementById("song-6-music");
    if (music.paused) {
        if(playingAnyOne){
            pauseAnyPlaying();
        }
        music.play();
        playingAnyOne=true
        playingID="song-6-music";
        GIFID="playingGIF6";
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    } 
    else {
        music.pause();
        music.currentTime=0;
        playingAnyOne=false;
        playingGIF.style.display = "none";
        music.removeAttribute('controls');
    }
    music.addEventListener('play',function(){
        playingGIF.style.display = "block";    
        music.setAttribute('controls', '');
    });
    music.addEventListener('pause',function(){
        playingGIF.style.display = "none";
    });
}