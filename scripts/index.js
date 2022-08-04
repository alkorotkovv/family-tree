//Импорт необходимых данных
import { validateList } from "./constants.js";
import { Card } from "./Card.js";
import { AddCard } from "./AddCard.js";
import { FormValidator } from "./FormValidator.js";
import { Area } from "./Area.js";

//Блок объявления переменных
const page = document.querySelector('.page');

const popupList = page.querySelectorAll('.popup');

export const popupCard = page.querySelector('.popup_type_card');
export const popupCardImage = popupCard.querySelector('.card-scale__image');
export const popupCardTitle = popupCard.querySelector('.card-scale__title');
export const popupCardPlace = popupCard.querySelector('.card-scale__place');
export const popupCardBirthday = popupCard.querySelector('.card-scale__birthday');
export const popupCardAbout = popupCard.querySelector('.card-scale__about');
export const popupCardGender = popupCard.querySelector('.card-scale__gender');
export const popupCardGeneration = popupCard.querySelector('.card-scale__generation');

const content = document.querySelector('.content');
const buffer = document.querySelector('.buffer');

export const popupAddCard = page.querySelector('.popup_type_add');
const formAddCard = popupAddCard.querySelector('.form_card_add');
const nameInput = formAddCard.querySelector('.form__input_content_name');
const imageInput = formAddCard.querySelector('.form__input_content_image');
const placeInput = formAddCard.querySelector('.form__input_content_place');
const birthdayInput = formAddCard.querySelector('.form__input_content_birthday');
const aboutInput = formAddCard.querySelector('.form__input_content_about');
const genderInputs = formAddCard.querySelectorAll('.form__item_content_gender');
export const IDInput = formAddCard.querySelector('.form_id');

const genderSelect = formAddCard.genders;
console.log(genderSelect)

//Генерация карточки +
function generateAddCard() {
  const card = new AddCard();
  return card.createAddCardElement();
}

//Отрисовка карточки +
function initAddCard() {
    const cardAddElement = generateAddCard();
    insertCard(cardAddElement);
    createGeneration(0);
};

//Функция получения открытого попапа
function getOpenedPopup() {
  return page.querySelector('.popup_opened');
};

//Функция открытия попапа
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByKeyPress);
};

//Функция закрытия попапа
function closePopup(popupElement) {
  document.removeEventListener('keydown', closePopupByKeyPress);
  popupElement.classList.remove('popup_opened');
};

//Функция закрытия попапа на нажатие ESC
function closePopupByKeyPress(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = getOpenedPopup();
    closePopup(openedPopup);
  }
};

//Функция определяющая пол, выбранный в форме
function getGender() {
  let gender;
  Array.from(genderSelect).forEach((genderOption) => {
    if (genderOption.selected)
      gender = genderOption.value;
  })
  return gender;
};

/*
//Функция открытия попапа редактирования профиля
function openPopupEdit() {
  nameInput.value = nameProfile.textContent;  //заполняем поля ввода данными из профиля
  jobInput.value = jobProfile.textContent;

  formEditValidator.hideErrors();  //скрываем ошибки при открытии
  formEditValidator.activateSaveButton();  //активируем кнопку при открытии
  openPopup(popupEdit);
};


//Обработчик отправки формы редактирования профиля
function formEditSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. Так мы можем определить свою логику отправки. О том, как это делать, расскажем позже.
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEdit);
};

*/
//Обработчик добавления новой карточки
function formAddCardSubmitHandler (evt) {
  evt.preventDefault();
  const cardData = {
    name: nameInput.value,
    image: imageInput.value,
    place: placeInput.value,
    birthday: birthdayInput.value,
    about: aboutInput.value,
    gender: getGender(),
    generation: Number(IDInput.textContent)
  };
  console.log(cardData)
  addCard(cardData);
  formAddCard.reset();  //Очищаем поля формы
  //formAddValidator.deactivateSaveButton(); //делаем кнопку неактивной
  closePopup(popupAddCard);
};

//Функция добавления карточки
function addCard(cardData) {
  //console.log(cardData)
  const card = new Card(cardData);
  const cardElement = card.createCardElement();
  insertCard(cardElement);
  //checkGeneration();
  //insertCard(cardElement, cardData.generation);
};

//Функция проверки, не надо ли создавать новое поколение
export function checkGeneration() {
  console.log('проверяем поколения');
  const generationList = document.querySelectorAll('.generation');
  //console.log(generationList.length);
  const lastGeneration = document.getElementById(`${generationList.length}`);
  const prelastGeneration = document.getElementById(`${generationList.length-1}`);
  //console.log("последнее поколение ");
 // console.log(lastGeneration);
  //console.log("предпоследнее поколение ");
 // console.log(prelastGeneration);
  const lastCardList = lastGeneration.querySelectorAll('.card');
  //console.log(cardList);
  if (lastCardList.length > 0)
    createGeneration(Number(lastGeneration.id));
  else if ((lastCardList.length == 0) && (prelastGeneration != null))
    {
      const prelastCardList = prelastGeneration.querySelectorAll('.card');
      if (prelastCardList.length == 0)
        lastGeneration.remove();
    }
};

//Функция создания нового поколения
function createGeneration(nowGeneration) {
  const generationElement = document.querySelector('#generationTemplate').content.querySelector('.generation').cloneNode(true);
  generationElement.id = nowGeneration + 1;
  content.append(generationElement);
  for (let i = 0; i < 11; i++) { // выведет 0, затем 1, затем 2
    generationElement.append(generateAreas());
  }
  //generationElement.append(generateAddCard());
};

/*-
//Функция вставки карточки в разметку
function insertCard(cardElement, generation) {
  const generationElement = document.getElementById(`${generation}`);
  generationElement.prepend(cardElement);
};
*/

//Функция вставки карточки в разметку
function insertCard(cardElement) {
  buffer.append(cardElement);
};

//Функция возвращающая количество текущих поколений на странице
function generationCount() {
  const generationCount = Array.from(page.querySelectorAll('.generation'));
  return generationCount.length;
};

//Функция генерации области для карточки
function generateAreas() {
  const area = new Area();
  return area.createAreaElement();
}


/*
//Слушатель для кнопки редактировать профиль
buttonProfileEdit.addEventListener('click', openPopupEdit);

//Слушатель для кнопки добавить карточку
buttonProfileAdd.addEventListener('click', openPopupAdd);

/*
//Добавляем слушатели на все кнопки закрытия попапа на странице
const buttonClosePopupList = page.querySelectorAll('.popup__close-button');
buttonClosePopupList.forEach((buttonElement) => {
  buttonElement.addEventListener('click', (evt) => {
    const openedPopup = evt.target.closest('.popup_opened');
    closePopup(openedPopup);
  });
});
*/
/*
//Слушатель для кнопки сохранения формы редактирования профиля
formEdit.addEventListener('submit', formEditSubmitHandler);

*/



//Слушатель для кнопки сабмита в попапе добавления карточки
formAddCard.addEventListener('submit', formAddCardSubmitHandler);

//Добавляем слушатели на все попапы (для закрытия попапа кликом на оверлей или крестик)
popupList.forEach((popupItem)=>{
  popupItem.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button'))
      closePopup(popupItem)
  });
});


//Создаем валидатор для формы
const formAddValidator = new FormValidator(validateList, formAddCard);
formAddValidator.enableValidation();

//Создание первоначальной карточки +
initAddCard();
