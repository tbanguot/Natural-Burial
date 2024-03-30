function playText(fileName) {
    var audio = document.getElementById('audioPlayer');
    audioPlayer.src = `audios/${fileName}.mp3`;
    audio.play();
}