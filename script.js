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
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const editProfileButton = profile.querySelector('.profile__button-edit');
const addNewCardButton = profile.querySelector('.profile__button-add');
const closeProfileButton = editProfilePopup.querySelector('.popup__close-button_place_edit-profile');
const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
const nameInput = editProfilePopup.querySelector('.form__item_el_name');
const professionInput = editProfilePopup.querySelector('.form__item_el_profession');
const popup = document.querySelector('.popup_type_full-image');
const fullImage = popup.querySelector('.full-image__picture');
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const closeAddCardPopupButton = addNewCardPopup.querySelector('.popup__close-button_place_add-card');
const addNewCardForm = addNewCardPopup.querySelector('.form_type_add-card');
const mestoNameInput = addNewCardForm.querySelector('.form__item_el_mesto-name');
const imageUrlInput = addNewCardForm.querySelector('.form__item_el_image-url');
const photoCardTemplate = document.querySelector('#photo-template').content;
function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
};
function editProfileFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
  closePopup(editProfilePopup);
};
editProfileForm.addEventListener('submit', editProfileFormHandler);
closeProfileButton.addEventListener('click', function () {
  closePopup(editProfilePopup)
});
function openEditProfilePopup () {
  openPopup(editProfilePopup);
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
};
function addCardFormHandler (evt) {
  evt.preventDefault();
  photosContainer.prepend(createCardElement(imageUrlInput.value, mestoNameInput.value));
  imageUrlInput.value = '';
  mestoNameInput.value = '';
  closePopup(addNewCardPopup);
};
addNewCardForm.addEventListener('submit', addCardFormHandler);
closeAddCardPopupButton.addEventListener('click', function () {
  closePopup(addNewCardPopup)
});
editProfileButton.addEventListener('click', openEditProfilePopup);
function addReactionListener (button) {
  button.addEventListener('click', function () {
    button.classList.toggle('photo__reaction_active');
  });
};
function deleteCard (evt) {
  const deleteButton = evt.target;
  const cardItem = deleteButton.closest('.photo');
  cardItem.remove();
};
function clickOnImageButton (evt) {
  const imageButton = evt.target;
  const photoDescription = imageButton.closest('.photo').textContent;
  fullImage.src = imageButton.dataset.image;
  fullImage.alt = photoDescription;
  popup.querySelector('.full-image__description').textContent = photoDescription;
  openPopup(popup);
};
popup.querySelector('.popup__close-button_place_full-image').addEventListener('click', function () {
  closePopup(popup);
});
const photosContainer = document.querySelector('.photos');
function createCardElement (imageLink, imageName) {
  const photoCard = photoCardTemplate.cloneNode(true);
  const imageButton = photoCard.querySelector('.photo__image');
  imageButton.style = `background-image: url(${imageLink})`;
  imageButton.dataset.image = imageLink;
  imageButton.addEventListener('click', clickOnImageButton);
  photoCard.querySelector('.photo__description-text').textContent = imageName;
  addReactionListener(photoCard.querySelector('.photo__reaction'));
  photoCard.querySelector('.photo__delete-button').addEventListener('click', deleteCard);
  return photoCard;
}
for (let i = 0; i < initialCards.length; i++) {
  const card = createCardElement(initialCards[i].link, initialCards[i].name);
  photosContainer.append(card);
}
function openAddNewCardPopup () {
  openPopup(addNewCardPopup);
};
addNewCardButton.addEventListener('click', openAddNewCardPopup);
