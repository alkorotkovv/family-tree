//Импорт необходимых данных
import {openPopup, popupCard, popupCardImage, popupCardTitle, popupCardPlace, popupCardBirthday, popupCardAbout} from './index.js';

//Класс карточки
export class Card {
  constructor(data)
  {
    this._name = data.name;
    this._image = data.image;
    this._place = data.place;
    this._birthday = data.birthday;
    this._about = data.about;
  };


  //Метод получения шаблона карточки
  _getTemplate() {
    return document.querySelector('#cardTemplate').content.querySelector('.card').cloneNode(true);
  };

  //Метод открытия попапа карточки
  _openPopupCard() {
    popupCardImage.src = this._image;
    popupCardImage.alt = 'попап фото ' + this._name;
    popupCardTitle.textContent = this._name;
    popupCardPlace.textContent = this._place;
    popupCardBirthday.textContent = this._birthday;
    popupCardAbout.textContent = this._about;

    openPopup(popupCard);
  };

  //Метод, добавляющий слушатели
  _setEventListeners() {
    this._cardElement.addEventListener('click', () => {
      this._openPopupCard();
    });
  };

  //Публичный метод создания элемента карточки
  createCardElement() {
    this._cardElement = this._getTemplate();
    this._cardImageElement = this._cardElement.querySelector('.card__image');
    this._cardNameElement = this._cardElement.querySelector('.card__title');

    //this._cardLikeElement = this._cardElement.querySelector('.card__like');
    //this._cardDeleteElement = this._cardElement.querySelector('.card__delete');

    this._cardNameElement.textContent = this._name;
    this._cardImageElement.src = this._image;
    this._cardImageElement.alt = 'фотография ' + this._name;
    this._setEventListeners();
    //console.log(this._cardElement)
    return this._cardElement;
  };


}







/*

  //Метод лайка
  _like() {
    this._cardLikeElement.classList.toggle('card__like_active');
    this._isLiked = !this._isLiked;
  };



  //Метод удаления карточки
  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null; //очищаем ссылку на DOM элемент
  };

*/
