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
function closePopup(element) {
  element.classList.remove('popup_opened');
}
function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};
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
  photosContainer.prepend(createCardElement(imageUrlInput.value, mestoNameInput.value));
  imageUrlInput.value = '';
  mestoNameInput.value = '';
  closePopup(addNewCardPopup);
};
addNewCardForm.addEventListener('submit', addCardFormHandler);
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
initialCards.forEach(function (card) {
  const newCard = createCardElement(card.link, card.name);
  photosContainer.append(newCard);
});
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

/** Валидация форм */
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__item_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__item-error_active');
};

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__item_type_error');
  errorElement.classList.remove('form__item-error_active');
  errorElement.textContent = '';
};

function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__submit_inactive');
  } else {
    buttonElement.classList.remove('form__submit_inactive');
  }
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  const buttonElement = formElement.querySelector('.form__submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();