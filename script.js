/* 
* Реализация функционала открытия и закрытия попапа
* редактирования профиля
*/
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
// Выбираем все необходимые элементы профиля
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileProfession = profile.querySelector('.profile__profession');
const editProfileButton = profile.querySelector('.profile__button-edit');
// Функция открытия попапа редактирования профиля
function openPopup () {
  editProfilePopup.classList.add('popup_opened');
  // Выбираем управляющие элементы попапа
  const closeProfileButton = editProfilePopup.querySelector('.popup__close-button');
  const editProfileForm = editProfilePopup.querySelector('.form_type_edit-profile');
  const nameInput = editProfilePopup.querySelector('.form__item_el_name');
  const professionInput = editProfilePopup.querySelector('.form__item_el_profession');
  function closePopup () {
    editProfilePopup.classList.remove('popup_opened');
  };
  function editProfileFormHandler (evt) {
    evt.preventDefault();
    const name = nameInput.value;
    const profession = professionInput.value;
    profileName.textContent = name;
    profileProfession.textContent = profession;
    closePopup();
  };
  // Устанавливаем значение полей форм
  nameInput.value = profileName.textContent;
  professionInput.value = profileProfession.textContent;
  editProfileForm.addEventListener('submit', editProfileFormHandler, {once: true});
  closeProfileButton.addEventListener('click', closePopup, {once: true});
};
editProfileButton.addEventListener('click', openPopup);

/**
 * Реализация функционала наполнения страницы стартовыми
 * карточками
 */
const photosContainer = document.querySelector('.photos');
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

function renderCard (imageLink, imageName) {
  return (`
    <article class="photo">
      <div class="photo__image" style="background-image: url(${imageLink})"></div>
      <div class="photo__description">
        <h2 class="photo__description-text">${imageName}</h2>
        <button type="button" class="photo__reaction" aria-label="Нравится"></button>
      </div>
    </article>
  `);
}

for (let i = 0; i < initialCards.length; i++) {
  photosContainer.insertAdjacentHTML('beforeend', renderCard(initialCards[i].link, initialCards[i].name));
}
