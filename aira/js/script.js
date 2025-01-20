let slideIndex = 0;

// Function to play the audio automatically
function playMusic() {
  const audio = document.getElementById('audioPlayer');
  if (audio) {
    audio.play().catch((error) => {
      console.error('Error playing audio:', error); // Log any errors
    });
  }
}

// Event listener for user interaction (click or scroll) to unmute and play audio
document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audioPlayer');
  
  // Event listener for the first click or scroll
  const playAudioOnInteraction = function() {
    // Unmute and play audio once user interacts
    audio.muted = false;
    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
    });

    // Remove the event listener after the first interaction
    document.removeEventListener('click', playAudioOnInteraction);
    document.removeEventListener('scroll', playAudioOnInteraction);
  };

  // Listen for first click or scroll
  document.addEventListener('click', playAudioOnInteraction, { once: true });
  document.addEventListener('scroll', playAudioOnInteraction, { once: true });
});

// Carousel functions
function showSlides() {
  const slides = document.getElementsByClassName("carousel-slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Move the carousel container
  document.querySelector(".carousel-container").style.transform = `translateX(${-slideIndex * 100}%)`;
}

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

// Initial call to show the first slide
showSlides();

// Optional: Auto-slide every 5 seconds
setInterval(function() {
  slideIndex++;
  showSlides();
}, 5000);
