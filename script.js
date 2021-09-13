const media = document.querySelector("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//play or pause the video
function toggleVideo() {
  if (media.paused) {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    media.play();
  } else {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    media.pause();
  }
}

function stopMedia() {
  media.pause();
  media.currentTime = 0;
  play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
}

function updateProgress() {
  //updating the progress bar value
  progress.value = (media.currentTime / media.duration) * 100; //multiple by 100 to make a percentage
  let minutes = Math.floor(media.currentTime / 60); //calculating the mins and seconds based on the current time
  let seconds = Math.floor(media.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;
  if (minutes < 10) {
    //if value less than 10 then adding 0 to show like 01, 02, 03--- same for seconds as well
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  let mediaTime = minuteValue + ":" + secondValue;
  timestamp.textContent = mediaTime;
}

function setVideoProgress() {
  //getting current time from the progress values
  media.currentTime = (Number(progress.value) / 100) * media.duration;
}

//clicking on the vide itself
media.addEventListener("click", toggleVideo);

//play and pause based on methods give by video api
play.addEventListener("click", toggleVideo);

//stop
stop.addEventListener("click", stopMedia);
media.addEventListener("ended", stopMedia);

//timer update
media.addEventListener("timeupdate", updateProgress);

//Progress bar
progress.addEventListener("change", setVideoProgress);
