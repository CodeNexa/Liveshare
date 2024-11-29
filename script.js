// Enable smooth transitions between carousel items
const carouselItems = document.querySelectorAll('.carousel-item');
let activeIndex = 0;

function updateCarousel() {
    // Hide all items
    carouselItems.forEach((item, index) => {
        item.style.opacity = index === activeIndex ? '1' : '0';
        item.style.zIndex = index === activeIndex ? '1' : '0';
    });

    // Move to the next item
    activeIndex = (activeIndex + 1) % carouselItems.length;
}

// Start looping
setInterval(updateCarousel, 3000);
document.addEventListener('DOMContentLoaded', () => {
    const images = [
      { src: 'images/qr.jpg', text: 'Welcome to Journey of Hope' },
      { src: 'images/rrrr.jpg', text: 'Sunday Worship' },
      { src: 'images/tty.jpg', text: 'Community Outreach' },
      { src: 'images/wre.jpg', text: 'Donations' }
    ];
  
    let currentIndex = 0;
    const carouselImages = document.getElementById('carousel-images');
    const carouselText = document.getElementById('carousel-text');
  
    // Function to update the carousel image and text
    function updateCarousel() {
      // Clear current images and text
      carouselImages.innerHTML = '';
      carouselText.innerHTML = '';
  
      // Create a new image element for the current index
      const imageElement = document.createElement('img');
      imageElement.src = images[currentIndex].src;
      imageElement.alt = images[currentIndex].text;
  
      // Create a new text element
      const textElement = document.createElement('div');
      textElement.textContent = images[currentIndex].text;
  
      // Append image and text to the carousel container
      carouselImages.appendChild(imageElement);
      carouselText.appendChild(textElement);
  
      // Update the index for the next image
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Initial call to populate the carousel
    updateCarousel();
  
    // Change image every 5 seconds
    setInterval(updateCarousel, 5000);
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

  // Example for a simple function to scroll smoothly to the different sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
