import { closePopup, initialCards } from './components/utils.js';
import { enableValidation } from './components/validate.js';
import { initializationCards } from './components/card.js';
import { editProfileFormHandler, openEditProfilePopup, addCardFormHandler, openAddNewCardPopup } from './components/modal.js';
import API from './components/api.js';
import './pages/index.css';

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__button-edit');
const addNewCardButton = profile.querySelector('.profile__button-add');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const profileAvatar = profile.querySelector('.profile__avatar');

const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');

const allPopups = document.querySelectorAll('.popup');

editProfileForm.addEventListener('submit', editProfileFormHandler);
editProfileButton.addEventListener('click', openEditProfilePopup);
addNewCardForm.addEventListener('submit', addCardFormHandler);
addNewCardButton.addEventListener('click', openAddNewCardPopup);

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

API.getUser()
  .then(res => {
    profileName.textContent = res.name;
    profileProfession.textContent = res.about;
    profileAvatar.style = `background-image: url(${res.avatar})`;
  })
  .catch(err => console.log(err));

API.getCards()
  .then(cards => {
    initializationCards(cards);
  })
  .catch(err => console.log(err));
