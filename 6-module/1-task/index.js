/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #items = null;
  elem = null;

  constructor(rows) {
    let id = 0;
    this.elem = document.createElement('table');
    this.#items = rows.map(row => {
      return {row: row, id: id++};
    });
    this.#render();
  }

  #render() {
    this.elem.innerHTML = this.#renderTableContent(this.#items);

    //#region клики на кнопки
    let buttons = this.elem.querySelectorAll('.remove-row__button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', this.#onRemoveRowButtonClick);
    }
    //#endregion
  }

  #onRemoveRowButtonClick = (event) => {
    let toDelete = this.#items.filter(item => item.id === Number(event.currentTarget.id));
    this.#items.splice(toDelete, 1);
    this.#render();
  };

  //region Отрисовка таблицы
  #renderTableContent = (items) => `
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          ${items.map(item => this.#renderItem(item.row, item.id)).join('')}
      </tbody>`;

  #renderItem = (item, id) => `
      <tr>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td><button class="remove-row__button" id="${id}">X</button></td>
      </tr>`;
  //endregion
}
