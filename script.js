import { closePopup, initialCards, openPopup } from './components/utils.js';
import { enableValidation } from './components/validate.js';
import { initializationCards, createCardElement } from './components/card.js';

const photosContainer = document.querySelector('.photos');

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const editProfileButton = profile.querySelector('.profile__button-edit');
const addNewCardButton = profile.querySelector('.profile__button-add');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const nameInput = editProfilePopup.querySelector('.form__item_el_name');
const professionInput = editProfilePopup.querySelector('.form__item_el_profession');
const popup = document.querySelector('.popup_type_full-image');
const fullImage = popup.querySelector('.full-image__picture');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');
const mestoNameInput = addNewCardForm.querySelector('.form__item_el_mesto-name');
const imageUrlInput = addNewCardForm.querySelector('.form__item_el_image-url');
const photoCardTemplate = document.querySelector('#photo-template').content;

const allPopups = document.querySelectorAll('.popup');

function editProfileFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(editProfilePopup);
};
editProfileForm.addEventListener('submit', editProfileFormHandler);
function openEditProfilePopup () {
  openPopup(editProfilePopup);
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
};
function addCardFormHandler (evt) {
  evt.preventDefault();
  photosContainer.prepend(createCardElement(photoCardTemplate, imageUrlInput.value, mestoNameInput.value));
  imageUrlInput.value = '';
  mestoNameInput.value = '';
  closePopup(addNewCardPopup);
};
addNewCardForm.addEventListener('submit', addCardFormHandler);
editProfileButton.addEventListener('click', openEditProfilePopup);

function openAddNewCardPopup () {
  openPopup(addNewCardPopup);
};
addNewCardButton.addEventListener('click', openAddNewCardPopup);

allPopups.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
      closePopup(element);
    }
  });
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    allPopups.forEach(function (element) {
      if (element.classList.contains('popup_opened')) {
        closePopup(element);
      }
    });
  }
});

enableValidation({
  formSelector: 'form',
  inputSelector: 'form__item',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__item-error_active',
});

initializationCards(photoCardTemplate, initialCards, photosContainer);
