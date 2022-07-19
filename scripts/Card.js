//Импорт необходимых данных
import {openPopup, popupCard, popupCardImage, popupCardTitle, popupCardPlace, popupCardBirthday, popupCardAbout, popupCardGeneration} from './index.js';

export let Elem;

//Класс карточки
export class Card {
  constructor(data)
  {
    this._name = data.name;
    this._image = data.image;
    this._place = data.place;
    this._birthday = data.birthday;
    this._about = data.about;
    this._generation = data.generation;
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
    popupCardGeneration.textContent = this._generation;
    openPopup(popupCard);
  };

  //Метод, добавляющий слушатели
  _setEventListeners() {
    this._cardImageElement.addEventListener('click', () => {
      this._openPopupCard();
    });
    this._cardNameElement.addEventListener('click', () => {
      this._openPopupCard();
    });
    this._cardDeleteElement.addEventListener('click', () => {
      this._deleteCard();
    });

    this._cardElement.addEventListener('dragstart', function(evt) {
      console.log('Start');
      console.log(evt.target.closest('.card'));
      Elem = this._cardElement;
    });

  };

  //Метод удаления карточки
  _deleteCard() {
    this._cardElement.remove();
    this._cardElement = null; //очищаем ссылку на DOM элемент
  };

  //Публичный метод создания элемента карточки
  createCardElement() {
    this._cardElement = this._getTemplate();
    this._cardImageElement = this._cardElement.querySelector('.card__image');
    this._cardNameElement = this._cardElement.querySelector('.card__title');
    this._cardDeleteElement = this._cardElement.querySelector('.card__delete');

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
*/

