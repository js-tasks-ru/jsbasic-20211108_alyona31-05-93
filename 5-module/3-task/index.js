function initCarousel() {
  const rightButton = document.querySelector("button, .carousel__arrow_right");
  const leftButton = document.querySelector("button, .carousel__arrow_left");
  const carousel = document.querySelector(".carousel__inner");

  const carouselOffset = carousel.offsetWidth; // ширина слайда
  const carouselItemsCount = carousel.querySelectorAll(".carousel__slide").length; // кол-во слайдов

  const leftmostSlideIndex = 0;
  const rightmostSlideIndex = carouselItemsCount - 1;

  let currentSlide = leftmostSlideIndex;

  updateVisual();

  rightButton.onclick = () => moveRight();

  leftButton.onclick = () => moveLeft();

  function moveLeft() {
    currentSlide--;
    updateVisual();
  }

  function moveRight() {
    currentSlide++;
    updateVisual();
  }

  function updateVisual() {
    if (currentSlide === leftmostSlideIndex) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
    }

    if (currentSlide === rightmostSlideIndex) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = '';
    }

    let offset = currentSlide * carouselOffset * -1;
    carousel.style.transform = `translateX(${offset}px)`;
  }
}
