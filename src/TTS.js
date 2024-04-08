/**
 * FILE HEADER
 * 
 * Purpose:
 * This Purpose of this is to implement a that function plays an audio file based on the given fileName parameter.
 * 
 * Authors: [Samih MohamedAli(Group Leader), Tongol Banguot, Cole Turner, Rishi Bhalla, Marko Ostrovista]
 */

 /** 
 * Function to implement the audio
 * 
 * Parameters:
 * @param {string} fileName - The name of the audio file to be played (without the file extension).
 * 
 * Return:
 * This function does not return any value explicitly, but it plays the audio file associated with the given fileName.
 */

function playText(fileName) {
    // Get the audio element from the HTML with the ID 'audioPlayer'
    var audio = document.getElementById('audioPlayer');
    // Set the source of the audio element to the specified audio file in the 'audios' folder
    audioPlayer.src = `audios/${fileName}.mp3`;
    // Play the audio
    audio.play();
}
