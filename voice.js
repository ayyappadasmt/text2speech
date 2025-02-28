let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US"; // Set language
let isSpeaking = false;

function speakText() {
    let text = document.getElementById("experiment-text").innerText;
    if (isSpeaking) {
        window.speechSynthesis.cancel(); // Stop previous speech
    }
    speech.text = text;
    window.speechSynthesis.speak(speech);
    isSpeaking = true;
}

function pauseSpeech() {
    window.speechSynthesis.pause();
}

function resumeSpeech() {
    window.speechSynthesis.resume();
}

function stopSpeech() {
    window.speechSynthesis.cancel();
    isSpeaking = false;
}
