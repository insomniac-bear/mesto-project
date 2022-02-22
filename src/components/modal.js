import { createCardElement } from './card.js';
import { closePopup, openPopup } from './utils.js';
import API from './api.js';

const editProfilePopup = document.querySelector(`.popup_type_edit-profile`);
const profile = document.querySelector(`.profile`);
const profileName = profile.querySelector(`.profile__name`);
const profileProfession = profile.querySelector(`.profile__profession`);
const nameInput = editProfilePopup.querySelector(`.form__item_el_name`);
const professionInput = editProfilePopup.querySelector(`.form__item_el_profession`);
const profileSubmitButton = editProfilePopup.querySelector('.form__submit');
const addNewCardPopup = document.querySelector(`.popup_type_add-card`);
const photosContainer = document.querySelector(`.photos`);
const imageUrlInput = addNewCardPopup.querySelector(`.form__item_el_image-url`);
const addNewCardSubmitButton = addNewCardPopup.querySelector('.form__submit');
const mestoNameInput = addNewCardPopup.querySelector(`.form__item_el_mesto-name`);

export function editProfileFormHandler (evt) {
  evt.preventDefault();
  profileSubmitButton.textContent = 'Сохранение...'
  API.updateUser(nameInput.value, professionInput.value)
    .then(data => {
      profileName.textContent = data.name;
      profileProfession.textContent = data.about;
    })
    .catch(err => console.log(err))
    .finally(() => {
      profileSubmitButton.textContent = 'Сохраненить'
      closePopup(editProfilePopup);
    });
};

export function openEditProfilePopup () {
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  openPopup(editProfilePopup);
};

export function addCardFormHandler (evt) {
  evt.preventDefault();
  addNewCardSubmitButton.textContent = 'Сохранение...';
  API.setCard(mestoNameInput.value, imageUrlInput.value)
    .then(data => {
      const card = createCardElement(data.link, data.name);
      photosContainer.prepend(card);

    })
    .catch(err => console.log(err))
    .finally(() => {
      imageUrlInput.value = '';
      mestoNameInput.value = '';
      addNewCardSubmitButton.textContent = 'Создать';
      addNewCardSubmitButton.classList.add('form__submit_inactive');
      addNewCardSubmitButton.setAttribute('disabled', '');
      closePopup(addNewCardPopup);
    });
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
