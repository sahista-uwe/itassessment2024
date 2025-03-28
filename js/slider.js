document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = slides.length;
  
    slides[currentSlide].classList.add('active');
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    let slideInterval = setInterval(nextSlide, 5000);
  
    const slider = document.querySelector('.hero-slider');
    slider.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
  
    slider.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, 5000);
    });
  
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });
  
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      prevSlide();
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });
  });