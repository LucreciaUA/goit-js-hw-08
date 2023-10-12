import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
    
const player = new Player(iframe);

 player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString())
}, 1000))
setTime()

function setTime() {
    seconds = Number(localStorage.getItem('videoplayer-current-time'));
    player.setCurrentTime(seconds)
}

