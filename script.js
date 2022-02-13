import { closePopup, initialCards } from './components/utils.js';
import { enableValidation } from './components/validate.js';
import { initializationCards } from './components/card.js';
import { editProfileFormHandler, openEditProfilePopup, addCardFormHandler, openAddNewCardPopup } from './components/modal.js';

const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const editProfileButton = profile.querySelector('.profile__button-edit');
const addNewCardButton = profile.querySelector('.profile__button-add');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');

const allPopups = document.querySelectorAll('.popup');

editProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  editProfileFormHandler({
    editProfilePopupSelector: 'popup_type_edit-profile',
    profileSelector: 'profile',
    profileNameSelector: 'profile__name',
    profileProfessionSelector: 'profile__profession',
    nameInputSelector: 'form__item_el_name',
    professionInputSelector: 'form__item_el_profession',
  });
});

editProfileButton.addEventListener('click', () => openEditProfilePopup({
  editProfilePopupSelector: 'popup_type_edit-profile',
  profileSelector: 'profile',
  profileNameSelector: 'profile__name',
  profileProfessionSelector: 'profile__profession',
  nameInputSelector: 'form__item_el_name',
  professionInputSelector: 'form__item_el_profession',
}));

addNewCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCardFormHandler({
    addNewCardPopupSelector: 'popup_type_add-card',
    photosContainerSelector: 'photos',
    photoCardTemplateSelector: 'photo-template',
    imageUrlInputSelector: 'form__item_el_image-url',
    mestoNameInputSelector: 'form__item_el_mesto-name',
  })
});

addNewCardButton.addEventListener('click', () => {
  openAddNewCardPopup({
    addNewCardPopupSelector: 'popup_type_add-card',
  });
});

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

initializationCards({
  photoCardTemplateSelector: 'photo-template',
  initialCards,
  photosContainerSelector: 'photos',
  imagePopupSelector: 'popup_type_full-image'
});
