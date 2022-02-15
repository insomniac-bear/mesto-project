import { openPopup } from './utils.js';

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
function clickOnImageButton (evt, imagePopupSelector) {
  const imageButton = evt.target;
  const photoDescription = imageButton.closest('.photo').textContent;
  const imagePopup = document.querySelector(`.${imagePopupSelector}`);
  const fullImage = imagePopup.querySelector('.full-image__picture');
  fullImage.src = imageButton.dataset.image;
  fullImage.alt = photoDescription;
  imagePopup.querySelector('.full-image__description').textContent = photoDescription;
  openPopup(imagePopup);
};

export function createCardElement (cardTemplate, imageLink, imageName, imagePopupSelector) {
  const photoCard = cardTemplate.cloneNode(true);
  const imageButton = photoCard.querySelector('.photo__image');
  imageButton.style = `background-image: url(${imageLink})`;
  imageButton.dataset.image = imageLink;
  imageButton.addEventListener('click', (evt) => clickOnImageButton(evt, imagePopupSelector));
  photoCard.querySelector('.photo__description-text').textContent = imageName;
  addReactionListener(photoCard.querySelector('.photo__reaction'));
  photoCard.querySelector('.photo__delete-button').addEventListener('click', deleteCard);
  return photoCard;
}

export function initializationCards ({ photoCardTemplateSelector, initialCards, photosContainerSelector, imagePopupSelector }) {
  const cardTemplate = document.querySelector(`#${photoCardTemplateSelector}`).content;
  const cardContainer = document.querySelector(`.${photosContainerSelector}`);
  initialCards.forEach(function (card) {
    const newCard = createCardElement(cardTemplate, card.link, card.name, imagePopupSelector);
    cardContainer.append(newCard);
  });
}
