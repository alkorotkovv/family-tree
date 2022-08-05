import { Popup } from "./Popup.js";

//Класс-наследник попап с картинкой
export class PopupWithImage extends Popup {
  constructor(popupSelector)
  {
    super(popupSelector);
    this._popupCardTitle = this._popupElement.querySelector('.card-scale__title');
    this._popupCardImage = this._popupElement.querySelector('.card-scale__image');
    this._popupCardPlace = this._popupElement.querySelector('.card-scale__place');
    this._popupCardBirthday = this._popupElement.querySelector('.card-scale__birthday');
    this._popupCardAbout = this._popupElement.querySelector('.card-scale__about');
    this._popupCardGender = this._popupElement.querySelector('.card-scale__gender');
    this._popupCardGeneration = this._popupElement.querySelector('.card-scale__generation');
  };

  //Метод открытия попапа с заполнением ссылки и подписи
  open(name, image, place, birthday, about, gender, generation) {
    super.open();
    this._popupCardTitle.textContent = name;
    this._popupCardImage.src = image;
    this._popupCardImage.alt = 'фото ' + name;
    this._popupCardPlace.textContent = place;
    this._popupCardBirthday.textContent = birthday;
    this._popupCardAbout.textContent = about;
    this._popupCardGender.textContent = gender;
    this._popupCardGeneration.textContent = generation;

  };

}
/*
    popupCardImage.src = this._image;
    popupCardImage.alt = 'попап фото ' + this._name;
    popupCardTitle.textContent = this._name;
    popupCardPlace.textContent = this._place;
    popupCardBirthday.textContent = this._birthday;
    popupCardAbout.textContent = this._about;
    popupCardGender.textContent = this._gender;
    popupCardGeneration.textContent = this._generation;
*/
