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
  editProfilePopup.classList.add('popup_opened');
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

/**
 * Реализация функционала наполнения страницы стартовыми
 * карточками
 */
const photosContainer = document.querySelector('.photos');
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
function renderCard (imageLink, imageName) {
  return (`
    <article class="photo">
      <div class="photo__image" style="background-image: url(${imageLink})"></div>
      <div class="photo__description">
        <h2 class="photo__description-text">${imageName}</h2>
        <button type="button" class="photo__reaction" aria-label="Нравится"></button>
      </div>
    </article>
  `);
}
for (let i = 0; i < initialCards.length; i++) {
  photosContainer.insertAdjacentHTML('beforeend', renderCard(initialCards[i].link, initialCards[i].name));
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
  // Устанавливаем обработчики событий на элементы управления попапа
  // editProfileForm.addEventListener('submit', editProfileFormHandler, {once: true});
  closeAddCardPopupButton.addEventListener('click', function () {
    closePopup(addNewCardPopup)
  }, {once: true});

  addNewCardPopup.classList.add('popup_opened');
};

addNewCardButton.addEventListener('click', openAddNewCardPopup);
