import { closePopup } from './components/utils.js';
import { enableValidation } from './components/validate.js';
import { initializationCards } from './components/card.js';
import { editProfileFormHandler, openEditProfilePopup, addCardFormHandler, openAddNewCardPopup, openEditAvatarPopup, patchAvatarHandler, confirmationFormHandler } from './components/modal.js';
import API from './components/api.js';
import './pages/index.css';

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__button-edit');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');

const addNewCardButton = profile.querySelector('.profile__button-add');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');

const profileAvatar = profile.querySelector('.profile__avatar');
const editAvatarForm = document.querySelector('.form_type_edit-avatar');

const confirmationForm = document.querySelector('.form_type_delete-card');

const allPopups = document.querySelectorAll('.popup');

editProfileForm.addEventListener('submit', editProfileFormHandler);
editProfileButton.addEventListener('click', openEditProfilePopup);
addNewCardForm.addEventListener('submit', addCardFormHandler);
addNewCardButton.addEventListener('click', openAddNewCardPopup);
profileAvatar.addEventListener('click', openEditAvatarPopup);
editAvatarForm.addEventListener('submit', patchAvatarHandler);
confirmationForm.addEventListener('submit', confirmationFormHandler);

allPopups.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(element);
    }
  });
});

enableValidation({
  formSelector: 'form',
  inputSelector: 'form__item',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active',
});

const getUserPromise = API.getUser();
const getCardsPromise = API.getCards();
const initialPromises = [getUserPromise, getCardsPromise];

Promise.all(initialPromises)
  .then((results) => {
    const userInfo = results[0];
    const cards = results[1];
    profileName.textContent = userInfo.name;
    profileProfession.textContent = userInfo.about;
    profileAvatar.style = `background-image: url(${userInfo.avatar})`;
    initializationCards(cards, userInfo._id);
  })
  .catch(err => console.log(err));
