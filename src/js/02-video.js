import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");
    
const savedCurrentTime = localStorage.getItem("videoplayer-current-time");

if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
}

const savePlaybackTime = throttle(() => {
    player.getCurrentTime().then((currentTime) => {
        localStorage.setItem('videoplayer-current-time', currentTime.toFixed(2));
    });
}, 1000);

player.on('timeupdate', savePlaybackTime);

console.log(Player);