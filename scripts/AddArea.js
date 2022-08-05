//Класс карточки
export class AddArea {
  constructor(handleCardClick)
  {
    this._handleCardClick = handleCardClick;
  };


  //Метод получения шаблона карточки
  _getTemplate() {
    return document.querySelector('#areaTemplate').content.querySelector('.area').cloneNode(true);
  };

  /*
  //Метод открытия попапа карточки
  _openPopupAddCard() {
    console.log(this._areaAddElement);
    //IDInput.textContent = this._generation;
    openPopup(popupAddCard);
  };
  */

  //Метод, добавляющий слушатели
  _setEventListeners() {
    this._areaAddElement.addEventListener('click', (evt) => {
      //this._generation = evt.target.closest('.generation').id;
      //console.log(evt.target.closest('.generation').id);
      //console.log(evt.target);
      //console.log(evt.currentTarget);
      //console.log(evt.currentTarget.childNodes.length);
      //Array.from(evt.target.classList).forEach((item) => console.log(item))
      //console.log(Array.from(evt.target.classList));
      if ((evt.currentTarget.childNodes.length == 1) && !(Array.from(evt.target.classList).some(item => item == "card__delete")))
      this._handleCardClick();
    });
  };

  //Публичный метод создания элемента карточки
  createAddAreaElement() {
    this._areaAddElement = this._getTemplate();
    this._setEventListeners();
    //console.log(this._cardElement)
    return this._areaAddElement;
  };

}

const newAddArea = new AddArea();
newAddArea.createAddAreaElement();
