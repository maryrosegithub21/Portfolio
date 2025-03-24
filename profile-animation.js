document.addEventListener('DOMContentLoaded', function() {
    const speakButton = document.getElementById('speak-button');
    const speakIcon = document.getElementById('speak-icon');
    const profileImage = document.querySelector('.profile-pic img');
    const profileVideo = document.getElementById('profile-video'); // Get the video element
    let animationInterval;
    let isSpeaking = false;
    let videoPlaying = false; // Track video playing state
    let speech = new SpeechSynthesisUtterance();

    // Array of mouth open and close images
    const mouthFrames = [
        'images/profile_mouth_open.png',
        'images/profile.png' // Assuming this is the mouth closed image
    ];

    // Function to toggle between mouth open and close images
    function animateMouth(speechRate) {
        let frameIndex = 0;
        const animationSpeed = 150 / speechRate; // Adjust speed based on speech rate
        animationInterval = setInterval(() => {
            if (!isSpeaking) {
                stopAnimateMouth();
                return;
            }
            profileImage.src = mouthFrames[frameIndex % mouthFrames.length];
            frameIndex++;
        }, animationSpeed);
    }

    // Function to stop the animation
    function stopAnimateMouth() {
        clearInterval(animationInterval);
        profileImage.src = 'images/profile.png'; // Reset to the default image
    }

    if (speakButton) {
        speakButton.addEventListener('click', function() {
            const aboutContent = document.getElementById('about-content');
            let aboutText = aboutContent.textContent.replace(/Hire Me|Resume|Linked|Github/g, '').trim();
            aboutText = aboutText.replace("About Me", ""); // Remove "About Me" heading
            const fullText = "Kia Ora. " + aboutText + " Let's Work Together and Thank you. To get Started, Please make an appointment to understand your vision and discuss how we can make it a reality.";
            const stopPhrase = "Let's Work Together and Thank you. To get Started, Please make an appointment to understand your vision and discuss how we can make it a reality.";
            const stopWords = stopPhrase.split(' ');
        
            speech.text = fullText;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;

            if (isSpeaking) {
                 window.speechSynthesis.cancel();
                 isSpeaking = false;
                 speakIcon.classList.remove('fa-volume-mute');
                 speakIcon.classList.remove('fa-pause');
                 speakIcon.classList.add('fa-volume-up');
                  if (profileVideo) {
                      profileVideo.pause();
                      profileVideo.currentTime = 0;
                      videoPlaying = false;
                  }
             } else {
                speech.onstart = function() {
                    isSpeaking = true;
                    animateMouth(speech.rate);
                    speakIcon.classList.remove('fa-volume-up');
                    speakIcon.classList.add('fa-volume-mute');
                    speakIcon.classList.add('fa-pause');
                    if (profileVideo) {
                        profileVideo.play();
                        videoPlaying = true;
                    }
                };

                speech.onboundary = function(event) {
                    const currentWord = event.utterance.text.substring(event.charIndex, event.charIndex + event.charLength);
                    const lastWordOfStopPhrase = stopWords[stopWords.length - 1];

                    if (currentWord.trim() === lastWordOfStopPhrase.trim()) {
                        window.speechSynthesis.cancel();
                        isSpeaking = false;
                        stopAnimateMouth();
                        speakIcon.classList.remove('fa-volume-mute');
                        speakIcon.classList.remove('fa-pause');
                        speakIcon.classList.add('fa-volume-up');
                        if (profileVideo) {
                            profileVideo.pause();
                            profileVideo.currentTime = 0;
                            videoPlaying = false;
                        }
                    }
                };

                speech.onend = function() {
                    isSpeaking = false;
                    stopAnimateMouth();
                    speakIcon.classList.remove('fa-volume-mute');
                    speakIcon.classList.remove('fa-pause');
                    speakIcon.classList.add('fa-volume-up');
                    if (profileVideo) {
                        profileVideo.pause();
                        profileVideo.currentTime = 0;
                        videoPlaying = false;
                    }
                };
                 speechSynthesis.speak(speech);
             }
             isSpeaking = !isSpeaking;
        });
    }
});