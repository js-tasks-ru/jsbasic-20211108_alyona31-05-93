import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  #productAddEvent = null;
  #container = null;

  get elem() {
    return this.#container;
  }

  constructor(product) {
    this.#productAddEvent = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });

    this.#container = this.#createContainer(product);
  }

  #createContainer = (product) => {
    let container = createElement(this.#getDivLayout(product));
    container.querySelector('.card__button').addEventListener('click', (event) => event.currentTarget.dispatchEvent(this.#productAddEvent));

    return container;
  };

  #getDivLayout = (product) => `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${product.image}" class="card__image" alt="${product.name}">
        <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
  `;
}
