import { openPopup } from './utils.js';
const imagePopup = document.querySelector('.popup_type_full-image');
const fullImage = imagePopup.querySelector('.full-image__picture');
const fullImageDescription = imagePopup.querySelector('.full-image__description');
const cardTemplate = document.querySelector(`#photo-template`).content;
const cardContainer = document.querySelector(`.photos`);

function addReactionListener (button) {
  button.addEventListener('click', function () {
    button.classList.toggle('photo__likes-button_active');
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
  fullImageDescription.textContent = photoDescription;
  openPopup(imagePopup);
};

export function createCardElement (imageLink, imageName, likesCount = 0) {
  const photoCard = cardTemplate.cloneNode(true);
  const imageButton = photoCard.querySelector('.photo__image');
  const likesCountElement = photoCard.querySelector('.photo__likes-count');
  imageButton.style = `background-image: url(${imageLink})`;
  imageButton.dataset.image = imageLink;
  likesCountElement.textContent = likesCount;
  imageButton.addEventListener('click', clickOnImageButton);
  photoCard.querySelector('.photo__description-text').textContent = imageName;
  addReactionListener(photoCard.querySelector('.photo__likes-button'));
  photoCard.querySelector('.photo__delete-button').addEventListener('click', deleteCard);
  return photoCard;
}

export function initializationCards (initialCards) {
  initialCards.forEach(function (card) {
    const newCard = createCardElement(card.link, card.name, card.likes.length);
    cardContainer.append(newCard);
  });
}
