function initCarousel() {
  const rightButton = document.querySelector("button, .carousel__arrow_right");
  const leftButton = document.querySelector("button, .carousel__arrow_left");
  const carousel = document.querySelector(".carousel__inner");

  const carouselOffset = carousel.offsetWidth; // ширина слайда
  const carouselItemsCount = carousel.querySelectorAll(".carousel__slide").length; // кол-во слайдов
  const rightBorder = 0;
  const leftBorder = -1 * carouselOffset * (carouselItemsCount - 1);

  const regex = /translateX\((?<translateX>-?\d+)px\)/;

  leftButton.style.display = 'none';

  rightButton.onclick = () => {
    leftButton.style.display = ''; // левая кнопка будет доступна

    let translateX = 0;

    let currentTransform = carousel.style.transform;
    if (regex.test(currentTransform)) {
      translateX = Number(regex.exec(currentTransform).groups.translateX);
    }

    let offset = translateX - carouselOffset;
    carousel.style.transform = `translateX(${offset}px)`;

    if (offset <= leftBorder) {
      rightButton.style.display = 'none';
    }
  };

  leftButton.onclick = () => {
    rightButton.style.display = ''; // правая кнопка будет доступна

    let translateX = 0;

    let currentTransform = carousel.style.transform;
    if (regex.test(currentTransform)) {
      translateX = Number(regex.exec(currentTransform).groups.translateX);
    }

    let offset = translateX + carouselOffset;
    carousel.style.transform = `translateX(${offset}px)`;

    if (offset >= rightBorder) {
      leftButton.style.display = 'none';
    }
  };
}
