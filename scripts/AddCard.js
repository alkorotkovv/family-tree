import {openPopup, popupAddCard} from './index.js';

//Класс карточки
export class AddCard {
  constructor()
  {
  };


  //Метод получения шаблона карточки
  _getTemplate() {
    return document.querySelector('#addCardTemplate').content.querySelector('.button-addcard').cloneNode(true);
  };

  //Метод открытия попапа карточки
  _openPopupAddCard() {
    openPopup(popupAddCard);
  };

  //Метод, добавляющий слушатели
  _setEventListeners() {
    this._cardAddElement.addEventListener('click', () => {
      this._openPopupAddCard();
    });
  };

  //Публичный метод создания элемента карточки
  createAddCardElement() {
    this._cardAddElement = this._getTemplate();
    this._setEventListeners();
    //console.log(this._cardElement)
    return this._cardAddElement;
  };

}

const newAddCard = new AddCard();
newAddCard.createAddCardElement();
