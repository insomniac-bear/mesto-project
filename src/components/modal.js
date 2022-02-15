import { createCardElement } from './card.js';
import { closePopup, openPopup } from './utils.js';

const editProfilePopup = document.querySelector(`.popup_type_edit-profile`);
const profile = document.querySelector(`.profile`);
const profileName = profile.querySelector(`.profile__name`);
const profileProfession = profile.querySelector(`.profile__profession`);
const nameInput = editProfilePopup.querySelector(`.form__item_el_name`);
const professionInput = editProfilePopup.querySelector(`.form__item_el_profession`);
const addNewCardPopup = document.querySelector(`.popup_type_add-card`);
const photosContainer = document.querySelector(`.photos`);
const imageUrlInput = addNewCardPopup.querySelector(`.form__item_el_image-url`);
const mestoNameInput = addNewCardPopup.querySelector(`.form__item_el_mesto-name`);


export function editProfileFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(editProfilePopup);
};

export function openEditProfilePopup () {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(editProfilePopup);
};

export function addCardFormHandler (evt) {
  evt.preventDefault();
  const card = createCardElement(imageUrlInput.value, mestoNameInput.value);
  photosContainer.prepend(card);
  imageUrlInput.value = '';
  mestoNameInput.value = '';
  closePopup(addNewCardPopup);
};

export function openAddNewCardPopup () {
  openPopup(addNewCardPopup);
};

export function closeByEsc (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    console.log(openedPopup);
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}
