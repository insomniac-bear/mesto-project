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
function clickOnImageButton (evt) {
  const imageButton = evt.target;
  const photoDescription = imageButton.closest('.photo').textContent;
  fullImage.src = imageButton.dataset.image;
  fullImage.alt = photoDescription;
  popup.querySelector('.full-image__description').textContent = photoDescription;
  openPopup(popup);
};

export function createCardElement (cardTemplate, imageLink, imageName) {
  const photoCard = cardTemplate.cloneNode(true);
  const imageButton = photoCard.querySelector('.photo__image');
  imageButton.style = `background-image: url(${imageLink})`;
  imageButton.dataset.image = imageLink;
  imageButton.addEventListener('click', clickOnImageButton);
  photoCard.querySelector('.photo__description-text').textContent = imageName;
  addReactionListener(photoCard.querySelector('.photo__reaction'));
  photoCard.querySelector('.photo__delete-button').addEventListener('click', deleteCard);
  return photoCard;
}

export function initializationCards (cardTemplate, initialCards, cardContainer) {
  initialCards.forEach(function (card) {
    const newCard = createCardElement(cardTemplate, card.link, card.name);
    // photosContainer.append(newCard);
    cardContainer.append(newCard);
  });
  }
