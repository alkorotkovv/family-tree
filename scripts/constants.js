//Массив объектов с данными карточек
export const initialCards = [
  {
    name: 'Коротков Александр Андреевич',
    image: './images/photo.png',
    place: 'Нижний Новгород',
    birthday: '12.03.1995',
    about: 'инженер'
  },
  {
    name: 'Коротков Андрей Вячеславович',
    image: './images/photo.png',
    place: 'Княгинино',
    birthday: '04.07.1964',
    about: 'водитель'
  },
  {
    name: 'Короткова Елена Эдуардовна',
    image: './images/photo.png',
    place: 'Арзамас',
    birthday: '04.09.1968',
    about: 'пенсионный фонд'
  }
];

//Объект с селекторами, необходимых для валидации
export const validateList = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};
