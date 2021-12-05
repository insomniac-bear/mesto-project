/**
 * Объявение служебных сущностей
 */
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const photoCardTemplate = document.querySelector('#photo-template').content;
function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
};
/* 
* Реализация функционала открытия и закрытия попапа
* редактирования профиля
*/
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
// Выбираем все необходимые элементы профиля
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const editProfileButton = profile.querySelector('.profile__button-edit');
// Функция открытия попапа редактирования профиля
function openEditProfilePopup () {
  openPopup(editProfilePopup);
  // Выбираем управляющие элементы попапа
  const closeProfileButton = editProfilePopup.querySelector('.popup__close-button_place_edit-profile');
  const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
  const nameInput = editProfilePopup.querySelector('.form__item_el_name');
  const professionInput = editProfilePopup.querySelector('.form__item_el_profession');
  // Функция обработки отправки формы
  function editProfileFormHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = professionInput.value;
    closePopup(editProfilePopup);
  };
  // Устанавливаем значение полей форм
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  // Устанавливаем обработчики событий на элементы управления попапа
  editProfileForm.addEventListener('submit', editProfileFormHandler, {once: true});
  closeProfileButton.addEventListener('click', function () {
    closePopup(editProfilePopup)
  }, {once: true});
};
editProfileButton.addEventListener('click', openEditProfilePopup);
/* 
* Реализация функционала лайка карточки
*/
function addReactionListener (button) {
  button.addEventListener('click', function () {
    button.classList.toggle('photo__reaction_active');
  });
};
/**
 * Реализация функционала удаления карточки
 */
function deleteCard (evt) {
  const deleteButton = evt.target;
  const cardItem = deleteButton.closest('.photo');
  cardItem.remove();
};
/**
 * Реализация функционала наполнения страницы стартовыми
 * карточками
 */
const photosContainer = document.querySelector('.photos');
function createCardElement (imageLink, imageName) {
  const photoCard = photoCardTemplate.cloneNode(true);
  photoCard.querySelector('.photo__image').style = `background-image: url(${imageLink})`;
  photoCard.querySelector('.photo__description-text').textContent = imageName;
  addReactionListener(photoCard.querySelector('.photo__reaction'));
  photoCard.querySelector('.photo__delete-button').addEventListener('click', deleteCard);
  return photoCard;
}
for (let i = 0; i < initialCards.length; i++) {
  const card = createCardElement(initialCards[i].link, initialCards[i].name);
  photosContainer.append(card);
}
/* 
* Реализация функционала открытия и закрытия попапа
* добавления новой карточки
*/
const addNewCardButton = profile.querySelector('.profile__button-add');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
// Функция открытия попапа редактирования профиля
function openAddNewCardPopup () {
  // Выбираем управляющие элементы попапа
  const closeAddCardPopupButton = addNewCardPopup.querySelector('.popup__close-button_place_add-card');
  const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');
  const mestoNameInput = addNewCardForm.querySelector('.form__item_el_mesto-name');
  const imageUrlInput = addNewCardForm.querySelector('.form__item_el_image-url');
  // Функция обработки отправки формы
  function addCardFormHandler (evt) {
    evt.preventDefault();
    photosContainer.prepend(createCardElement(imageUrlInput.value, mestoNameInput.value));
    imageUrlInput.value = '';
    mestoNameInput.value = '';
    closePopup(addNewCardPopup);
  };
  // Устанавливаем обработчики событий на элементы управления попапа
  addNewCardForm.addEventListener('submit', addCardFormHandler, {once: true});
  closeAddCardPopupButton.addEventListener('click', function () {
    closePopup(addNewCardPopup)
  }, {once: true});

  openPopup(addNewCardPopup);
};
addNewCardButton.addEventListener('click', openAddNewCardPopup);
