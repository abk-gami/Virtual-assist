const speakBtn = document.querySelector('button'),
// btn = document.querySelector('button h3'),
talk = document.querySelector('h2');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);

}
function greetMe() {
    let day = new Date();
    let hr = day.getHours();

    if(hr >= 0 && hr < 12){
       speak("Good Morning babe");
    }
    else if(hr >= 12 && hr <= 16){
        speak("Good Afternoon babe");
    }
    else {
        speak("Good Evening babe");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Sepab")
    speak("Going Online")
    greetMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    talk.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

speakBtn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello boss";
        speech.text = finalText;
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine , thank you babe";
        speech.text = finalText;
    }
    else if(message.includes('who are you')) {
        const finalText = "I am Habeebee, ABK new girlfriend";
        speech.text = finalText;
    }
    else if(message.includes('abdul jalal')) {
        const finalText = "Fuck you gadau";
        speech.text = finalText;
    }
    



    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}