const playButton = document.querySelector('.video__player-img');
const video = document.getElementById('player');
const playerPlayButton = document.querySelector('.duration__img');
const durationControl = document.getElementById('durationLevel');
const soundControl = document.getElementById('soundLevel');
const soundButton = document.getElementById('soundButton');
const dynamicButton = document.getElementById('dynamic'); 
let intervalId;
let soundLevel;


video.addEventListener("loadeddata", function() {

    video.addEventListener('click', playStop); 

    let playButtons = document.querySelectorAll('.play');

    for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
    
}
    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener('input', setVideoDuration);

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;
    soundControl.addEventListener('input', changeSoundVolume);

    dynamicButton.addEventListener('click', soundOff);
    console.log('click');

    video.addEventListener('ended', () => {
        playButton.classList.toggle('video__player-img--active');
        playerPlayButton.classList.remove('duration__img--active');
        video.currentTime = 0;
    })

});


function playStop() {
    playButton.classList.toggle('video__player-img--active');
    playerPlayButton.classList.toggle('duration__img--active');
    if (video.paused) {
        video.play(); 
        intervalId = setInterval(updateDuration, 1000/60);   
    } else {
        clearInterval(intervalId);
        video.pause();
       
    }
}

function setVideoDuration() {
    video.currentTime = durationControl.value;
    updateDuration();
}

function updateDuration() {
    durationControl.value = video.currentTime;
    let step = video.duration / 100;
    let percent = video.currentTime / step;
    durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0% ${percent}%, #626262 ${percent}%)`;
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
    if (video.volume == 0) {
        soundButton.classList.add('sound--active');
    } else {
        soundButton.classList.remove('sound--active');
    }
}

function soundOff () {
    if (video.volume == 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
        soundButton.classList.remove('sound--active');
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
        soundButton.classList.add('sound--active');
    }
}



$('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', yellow), '
                + 'color-stop(' + val + ', grey)'
                + ')'
                );
});