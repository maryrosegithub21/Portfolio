 // Existing modal functionality for Project 1 and Project 2
 document.getElementById('read-more-btn').onclick = function() {
    document.getElementById('key-features-modal').style.display = 'block';
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
// JavaScript to toggle the menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
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
document.getElementById('project2-modal').style.display = 'block';
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
videoModal.style.display = 'block';
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
project1VideoModal.style.display = 'block';
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

   // Open the modal when the "Hire Me" button is clicked
   hireMeBtn.onclick = function(event) {
       event.preventDefault();
       hireMeModal.style.display = 'block';
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