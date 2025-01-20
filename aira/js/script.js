let slideIndex = 0;

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
