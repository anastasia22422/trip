const swiper = new Swiper(".swiper-container", {
    direction: "vertical",
    effect: "fade",
    speed: 1000,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: {
      invert: false,
      forceToAxis: false,
      thresholdDelta: 50,
      sensitivity: 1,
    },
    on: {
      init: function () {
        let activeSlide = this.slides[this.activeIndex]; // Gets the current active slide.
        let background = activeSlide.querySelector(".background"); // selects the element with the class .background inside the active slide.
        background.classList.add("animation"); // Adds the "animation" class to the background element, likely triggering a CSS animation.
      },

      // slideChange: This event is triggered every time the slide changes. In this function: this.slides.forEach((slide) => {...}): Loops through all the slides and removes the "animation" class from each slide's background.
      // After that, it re-applies the "animation" class to the active slide's background. 
      // This ensures only the background of the currently active slide has the animation.
      
      slideChange: function () { 
        this.slides.forEach((slide) => {
          let background = slide.querySelector(".background");
          if (background) {
            background.classList.remove("animation");
          }
        });
        let activeSlide = this.slides[this.activeIndex];
        let background = activeSlide.querySelector(".background");
        if (background) {
          background.classList.add("animation");
        }
      },
    },
  });
  

// // this.slides.forEach((slide) => {...}):
// this.slides: Refers to the array of all the slides in the Swiper instance.
// forEach((slide) => {...}): Loops through each slide in the array.
// let background = slide.querySelector(".background");:
// For each slide, it selects an element with the class .background inside that slide. This assumes that each slide has a child element with the class .background.
// if (background) { background.classList.remove("animation"); }:
// Checks if a background element exists inside the slide. If it does, the code removes the class animation from the background element.
// This ensures that the animation is removed from all slides when a new slide becomes active.
// let activeSlide = this.slides[this.activeIndex];:

// this.activeIndex: Refers to the index of the currently active (visible) slide in the Swiper instance.
// let activeSlide = this.slides[this.activeIndex];: Retrieves the currently active slide based on its index.
// let background = activeSlide.querySelector(".background");:

// Similar to before, it selects the .background element inside the active slide.
// if (background) { background.classList.add("animation"); }:

// Checks if the active slide has a background element. If it does, it adds the animation class to the background element.
// This triggers the animation for the background of the currently active slide.