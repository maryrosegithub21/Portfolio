// Existing modal functionality for Project 1 and Project 2
document.getElementById('read-more-btn').onclick = function() {
    document.getElementById('key-features-modal').style.display = 'flex';
}

// Close the modal when the close button is clicked
document.querySelector('#key-features-modal .close-btn').onclick = function() {
document.getElementById('key-features-modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('key-features-modal')) {
        document.getElementById('key-features-modal').style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Toggle the navigation menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the menu and scroll to the section when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the menu after clicking a link
            navMenu.classList.remove('active');
        });
    });

    // Ensure the menu resets when resizing the window
    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) {
            navMenu.classList.remove('active');
        }
    });
});



// Scroll Down to contact when click
document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

 // Scroll Down to about-content when click
    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('about-content').scrollIntoView({ behavior: 'smooth' });
    });

 // Scroll Down to portfolio-section when click
    document.getElementById('portfolio-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
    });

//  Scroll Down to Services when click
    document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' });
});

 //  Scroll Down to Services when click
document.getElementById('experience-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('experience-section').scrollIntoView({ behavior: 'smooth' });
});

// Scroll to portfolio section when "Previous Projects" button is clicked
document.getElementById('previous-projects-btn').addEventListener('click', function(event) {
event.preventDefault(); // Prevent default anchor behavior
document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
});

  // For tab in portfolio
document.getElementById('tab-project-one').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('project-one').classList.add('active');
    document.getElementById('project-two').classList.remove('active');
});

document.getElementById('tab-project-two').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('project-two').classList.add('active');
    document.getElementById('project-one').classList.remove('active');
});

// Initialize by showing Project One
document.getElementById('project-one').classList.add('active');

 // Open the modal for Project 2
document.getElementById('read-more-btn-project2').onclick = function(event) {
event.preventDefault(); // Prevent default anchor behavior
document.getElementById('project2-modal').style.display = 'flex';
}

// Close the modal when the close button is clicked
document.querySelector('#project2-modal .close-btn').onclick = function() {
document.getElementById('project2-modal').style.display = 'none';
}


// Close the modal when clicking outside of the modal content
document.getElementById('project2-modal').addEventListener('click', function(event) {
    if (event.target == this) {
        this.style.display = 'none';
    }
});


// other functionality for Project 2 video modal
var videoModal = document.getElementById('video-modal');
var videoThumbnail = document.getElementById('video-thumbnail');
var videoElement = videoModal.querySelector('video');
var videoCloseBtn = document.querySelector('#video-modal .close-btn');

videoThumbnail.onclick = function() {
videoModal.style.display = 'flex';
videoElement.play(); // Play the video when the modal is opened
}

videoCloseBtn.onclick = function() {
videoElement.pause(); // Pause the video when the modal is closed
videoModal.style.display = 'none';
}

videoModal.addEventListener('click', function(event) {
    if (event.target == this) {
        videoElement.pause(); // Pause the video when clicking outside the modal
        this.style.display = 'none';
    }
});

// Other functionality for Project 1 video modal
var project1VideoModal = document.getElementById('project1-video-modal');
var project1VideoThumbnail = document.getElementById('project1-video-thumbnail');
var project1VideoElement = project1VideoModal.querySelector('video');
var project1VideoCloseBtn = project1VideoModal.querySelector('.close-btn');

project1VideoThumbnail.onclick = function() {
project1VideoModal.style.display = 'flex';
project1VideoElement.play(); // Play the video when the modal is opened
}

project1VideoCloseBtn.onclick = function() {
project1VideoElement.pause(); // Pause the video when the modal is closed
project1VideoModal.style.display = 'none';
}

project1VideoModal.addEventListener('click', function(event) {
    if (event.target == this) {
        project1VideoElement.pause(); // Pause the video when clicking outside the modal
        this.style.display = 'none';
    }
});

// Terms and Conditions modal functionality
const termsModal = document.getElementById('terms-modal');
const termsLink = document.getElementById('terms-link');
const termsCloseBtn = document.querySelector('#terms-modal .close-btn');

termsLink.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    termsModal.style.display = 'block'; // Show the modal
}

termsCloseBtn.onclick = function() {
    termsModal.style.display = 'none'; // Hide the modal
}

termsModal.addEventListener('click', function(event) {
    if (event.target == this) {
        this.style.display = 'none'; // Hide the modal if clicked outside
    }
});

   // JavaScript to handle modal display
   const hireMeModal = document.getElementById('hire-me-modal');
   const hireMeBtn = document.getElementById('hire-me-btn');
   const closeBtn = document.querySelector('.close-btn');

   document.addEventListener('DOMContentLoaded', function() {
    const hireMeBtn = document.getElementById('hire-me-btn');
    const hireMeModal = document.getElementById('hire-me-modal');
    const closeBtn = hireMeModal.querySelector('.close-btn');

   // Open the modal when the "Hire Me" button is clicked
   hireMeBtn.onclick = function(event) {
       event.preventDefault();
       hireMeModal.style.display = 'flex';
   }

   // Close the modal when the close button is clicked
   closeBtn.onclick = function() {
       hireMeModal.style.display = 'none';
   }

   // Close the modal when clicking outside of the modal content
   window.onclick = function(event) {
       if (event.target == hireMeModal) {
           hireMeModal.style.display = 'none';
       }
   }
});

       // Handle form submission
       document.getElementById('hire-me-form').onsubmit = function(event) {
        event.preventDefault();

        emailjs.sendForm('service_jy1hdze', 'template_muwyafu', this)
            .then(function() {
                alert('Your message was successfully sent. I will get back to you within an hour.');
                hireMeModal.style.display = 'none';
                document.getElementById('hire-me-form').reset(); 
            }, function(error) {
                alert('Failed to send the message. Please try again later.');
            });
    }


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        emailjs.sendForm('service_jy1hdze', 'template_muwyafu', this)
            .then(function() {
                alert('Your message was successfully sent. I will get back to you within an hour.');
                document.getElementById('contact-form').reset(); 
            }, function(error) {
                alert('Failed to send the message. Please try again later.');
            });
    });

   let speech = null; // Store the SpeechSynthesisUtterance object
let isSpeaking = false; // Flag to track if the content is currently being spoken

// Function to speak the about content
function speakAboutContent() {
    const aboutContent = document.getElementById('about-content');
    // Remove the buttons' content from the text to be spoken
    let aboutText = aboutContent.textContent.replace(/Hire Me|Resume|Linked|Github/g, '').trim();
    aboutText = aboutText.replace("About Me", ""); // Remove "About Me" heading
    const fullText = "Kia Ora. " + aboutText + " Let's Work Together and Thank you. To get Started, Please make an appointment to understand your vision and discuss how we can make it a reality.";

    if (!isSpeaking) {
        // If not already speaking, start speaking
        speech = new SpeechSynthesisUtterance(fullText);
        speech.rate = 0.9; // Adjust the speaking rate (0.1 to 10, default is 1)
        speech.pitch = 1; // Adjust the pitch (0 to 2, default is 1)

        // Attempt to select a female voice
        const voices = window.speechSynthesis.getVoices();
        let femaleVoice = null;
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name.toLowerCase().includes('female')) {
                femaleVoice = voices[i];
                break;
            }
        }

        if (femaleVoice) {
            speech.voice = femaleVoice;
        }

        window.speechSynthesis.speak(speech);
        isSpeaking = true;
        sessionStorage.setItem('aboutContentSpoken', 'true'); // Store in session storage
        document.getElementById('speak-icon').classList.remove('fa-volume-up');
        document.getElementById('speak-icon').classList.add('fa-pause');
    } else {
        // If already speaking, stop speaking
        window.speechSynthesis.cancel();
        isSpeaking = false;
        document.getElementById('speak-icon').classList.remove('fa-pause');
        document.getElementById('speak-icon').classList.add('fa-volume-up');
    }
}

// Trigger on Page Load (integrated into existing DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function() {
    // Check if the content has already been spoken during this session
    if (sessionStorage.getItem('aboutContentSpoken') !== 'true') {
        // Existing modal functionality...
        // speakAboutContent(); // Remove this line
    }

    // Get the speak button element
    const speakButton = document.getElementById('speak-button');

    // Attach the speakAboutContent function to the button click
    speakButton.addEventListener('click', function() {
        speakAboutContent();
    });

    // Add an event listener to detect when speech ends
    window.speechSynthesis.addEventListener('end', () => {
        isSpeaking = false;
        document.getElementById('speak-icon').classList.remove('fa-pause');
        document.getElementById('speak-icon').classList.add('fa-volume-up');
    });
});

