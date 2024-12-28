console.log("Final Project");

const slides = document.querySelectorAll(".slide");

const slideFn = () => {
  let currentSlide = 0;
  slides[currentSlide].classList.add("active");

  const showSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  const goToNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlides();
  };

  const slideInterval = setInterval(goToNextSlide, 2000);
  showSlides();
};

slideFn();
