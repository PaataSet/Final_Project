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

// პროცენტების სლაიდერი

let indicator1 = document.querySelector(".line1-0");
let indicator2 = document.querySelector(".line2-0");
let indicator3 = document.querySelector(".line3-0");
let indicator4 = document.querySelector(".line4-0");

window.onscroll = function () {
  indicator1.classList.add("line-80");
  indicator2.classList.add("line-65");
  indicator3.classList.add("line-50");
  indicator4.classList.add("line-30");
};

// end
