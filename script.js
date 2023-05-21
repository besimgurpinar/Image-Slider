const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    
    function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      slides[index].classList.add('active');
      currentSlide = index;
    }
    
    function showNextSlide() {
      const nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }
    
    function showPrevSlide() {
      const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevSlide);
    }
    
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);