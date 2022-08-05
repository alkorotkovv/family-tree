//Импорт необходимых данных
import { validateList } from "./constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { AddArea } from "./AddArea.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";

//Блок объявления переменных
const page = document.querySelector('.page');
const content = document.querySelector('.content');
const formAddCard = document.querySelector('.form_card_add');
export const buffer = document.querySelector('.buffer');
export const header = document.querySelector('.header');





const popupAddPerson = new PopupWithForm('.popup_type_add', handleSubmitFormAdd);
popupAddPerson.setEventListeners();
const popupInfoPerson = new PopupWithImage('.popup_type_card');
popupInfoPerson.setEventListeners();


//Обработчик добавления новой карточки
function handleSubmitFormAdd (inputValuesObject) {
  console.log(inputValuesObject);
  const cardData = {
    name: inputValuesObject.name,
    image: inputValuesObject.image,
    place: inputValuesObject.place,
    birthday: inputValuesObject.birthday,
    about: inputValuesObject.about,
    gender: inputValuesObject.gender
  };
  addCard(cardData);
  //cardsSection.addItem(generateCard({name: place, link: url}));
  formAddValidator.deactivateSaveButton(); //делаем кнопку неактивной
  popupAddPerson.close();
};


function handleClickAddArea () {
  //const { name, job } = user.getUserInfo(); //деструктуризация
  //nameInput.value = name;  //заполняем поля ввода данными из профиля
  //jobInput.value = job;
  //formEditValidator.hideErrors();  //скрываем ошибки при открытии
  //formEditValidator.activateSaveButton();  //активируем кнопку при открытии
  popupAddPerson.open();
}





//Функция добавления карточки
function addCard(cardData) {
  //console.log(cardData)
  const card = new Card(cardData, {
    handleCardClick: () => {
      popupInfoPerson.open(card._name, card._image, card._place, card._birthday, card._about, card._gender, card._generation);
    }
  });
  const cardElement = card.createCardElement();
  insertCard(cardElement);
};


//Функция проверки, не надо ли создавать новое поколение
export function checkGeneration() {
  console.log('проверяем поколения');
  const generationList = document.querySelectorAll('.generation');
  //console.log(generationList.length);
  const lastGeneration = document.getElementById(`${generationList.length}`);
  const prelastGeneration = document.getElementById(`${generationList.length-1}`);
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



//Функция вставки карточки в разметку
function insertCard(cardElement) {
  buffer.append(cardElement);
};

//Функция возвращающая количество текущих поколений на странице
function generationCount() {
  const generationCount = Array.from(page.querySelectorAll('.generation'));
  return generationCount.length;
};











//Отрисовка карточки +
function init() {
    createGeneration(0);
};

//Функция создания нового поколения
function createGeneration(nowGeneration) {
  const generationElement = document.querySelector('#generationTemplate').content.querySelector('.generation').cloneNode(true);
  generationElement.id = nowGeneration + 1;
  content.append(generationElement);
  for (let i = 0; i < 11; i++) { // выведет 0, затем 1, затем 2
    generationElement.append(generateAddAreas());
  }
};

//Функция генерации карточки +
function generateAddAreas() {
  const area = new AddArea(handleClickAddArea);
  return area.createAddAreaElement();
}

//Создание первоначальных данных
init();

//Создаем валидатор для формы
const formAddValidator = new FormValidator(validateList, formAddCard);
formAddValidator.enableValidation();
