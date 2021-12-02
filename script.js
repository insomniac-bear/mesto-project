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
