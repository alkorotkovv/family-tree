import { Popup } from "./Popup.js";

//Класс-наследник попап с формой
export class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler)
  {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popupElement.querySelector('.form');
    this._inputs = Array.from(this._form.querySelectorAll('.form__input'));
    this._gender = this._form.querySelector('.form__gender');
  };

  open(area) {
    super.open();
    this._where = area;
    //console.log(this._where)
  }


  //Метод, возвращающий объект со значениями инпутов
  _getInputValues() {
    const object = {};
    this._inputs.forEach((input) => object[input.name] = input.value);
    let gender = Array.from(this._gender).find(genderOption => genderOption.selected == true);
    object['gender'] = gender.value;
    return object;
  };


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault(); //отменяем стандартную отправку формы
      //console.log(this._where)
      this._formSubmitHandler(this._getInputValues(), this._where);
    });
  };

  close() {
    super.close();
    this._form.reset();  //Очищаем поля формы
  };

}
