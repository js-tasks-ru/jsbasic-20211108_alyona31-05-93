import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #carousel = null;
  #leftButton = null;
  #rightButton = null;
  #slidesCount = 0;
  #innerCarousel = 0;
  #currentSlideIndex = 0;

  get elem() {
    return this.#carousel;
  }

  constructor(slides) {
    this.#carousel = this.#createCarousel(slides);
  }

  #createCarousel = (slides) => {
    let carousel = createElement(this.#getCarouselLayout(slides));

    //region Кнопки карусели
    this.#slidesCount = carousel.querySelectorAll(".carousel__slide").length;
    this.#leftButton = carousel.querySelector('.carousel__arrow_left');
    this.#leftButton.style.display = 'none';
    this.#rightButton = carousel.querySelector('.carousel__arrow_right');
    this.#innerCarousel = carousel.querySelector('.carousel__inner');

    this.#leftButton.addEventListener('click', this.#onLeftButtonClick);
    this.#rightButton.addEventListener('click', this.#onRightButtonClick);
    //endregion

    //#region События на кнопки +
    let cardButtons = carousel.querySelectorAll('.carousel__button');
    for (let i = 0; i < cardButtons.length; i++) {
      cardButtons[i].addEventListener('click', this.#onCardButtonClick);
    }
    //#endregion

    return carousel;
  };

  //region Обработчики для кнопок
  #onLeftButtonClick = () => {
    this.#currentSlideIndex--;
    this.#updateVisual();
  };

  #onRightButtonClick = () => {
    this.#currentSlideIndex++;
    this.#updateVisual();
  };

  #onCardButtonClick = (event) => {
    let ce = new CustomEvent("product-add", {
      detail: event.target.closest('.carousel__slide').dataset.id,
      bubbles: true
    });

    event.target.dispatchEvent(ce);
  };
  //endregion

  //region Отображение
  #getCarouselLayout = (slides) => `
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
      ${slides.map(slide => this.#getSlideLayout(slide)).join('')}
    </div>
  </div>`;

  #getSlideLayout = (slide) => `
    <div class="carousel__slide" data-id="${slide.id}">
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="${slide.name}">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
  //endregion

  #updateVisual = () => {
    if (this.#currentSlideIndex === 0) {
      this.#leftButton.style.display = 'none';
    } else if (this.#currentSlideIndex === this.#slidesCount - 1) {
      this.#rightButton.style.display = 'none';
    } else {
      this.#leftButton.style.display = '';
      this.#rightButton.style.display = '';
    }

    let offset = this.#currentSlideIndex * this.#innerCarousel.offsetWidth * -1;
    this.#innerCarousel.style.transform = `translateX(${offset}px)`;
  };
}
