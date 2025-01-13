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

  const slideInterval = setInterval(goToNextSlide, 5000);
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

// დასაწყისი

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("rs-slide");
  let dots = document.getElementsByClassName("rs-button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" rs-button2", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " rs-button2";
}

// დასასრული

// ფილტრის დასაწყისი
filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("lp-card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementsById("nav-div");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ფილტრის დასასრული

// დასაწყისი

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// დასასრული
