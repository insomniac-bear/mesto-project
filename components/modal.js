import { createCardElement } from './card.js';
import { closePopup, openPopup } from './utils.js';

export function editProfileFormHandler ({ editProfilePopupSelector, profileSelector, profileNameSelector, profileProfessionSelector, nameInputSelector, professionInputSelector }) {
  const editProfilePopup = document.querySelector(`.${editProfilePopupSelector}`);
  const profile = document.querySelector(`.${profileSelector}`);
  const profileName = profile.querySelector(`.${profileNameSelector}`);
  const profileProfession = profile.querySelector(`.${profileProfessionSelector}`);
  const nameInput = editProfilePopup.querySelector(`.${nameInputSelector}`);
  const professionInput = editProfilePopup.querySelector(`.${professionInputSelector}`);

  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(editProfilePopup);
};

export function openEditProfilePopup ({ editProfilePopupSelector, profileSelector, profileNameSelector, profileProfessionSelector, nameInputSelector, professionInputSelector }) {
  const editProfilePopup = document.querySelector(`.${editProfilePopupSelector}`);
  const profile = document.querySelector(`.${profileSelector}`);
  const profileName = profile.querySelector(`.${profileNameSelector}`);
  const profileProfession = profile.querySelector(`.${profileProfessionSelector}`);
  const nameInput = editProfilePopup.querySelector(`.${nameInputSelector}`);
  const professionInput = editProfilePopup.querySelector(`.${professionInputSelector}`);

  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(editProfilePopup);
};

export function addCardFormHandler ({ addNewCardPopupSelector, photosContainerSelector, photoCardTemplateSelector, imageUrlInputSelector, mestoNameInputSelector }) {
  const addNewCardPopup = document.querySelector(`.${addNewCardPopupSelector}`);
  const photosContainer = document.querySelector(`.${photosContainerSelector}`);
  const cardTemplate = document.querySelector(`#${photoCardTemplateSelector}`).content;
  const imageUrlInput = addNewCardPopup.querySelector(`.${imageUrlInputSelector}`);
  const mestoNameInput = addNewCardPopup.querySelector(`.${mestoNameInputSelector}`);
  
  const card = createCardElement(cardTemplate, imageUrlInput.value, mestoNameInput.value);
  photosContainer.prepend(card);
  imageUrlInput.value = '';
  mestoNameInput.value = '';
  closePopup(addNewCardPopup);
};

export function openAddNewCardPopup ({ addNewCardPopupSelector }) {
  const addNewCardPopup = document.querySelector(`.${addNewCardPopupSelector}`);
  openPopup(addNewCardPopup);
};
