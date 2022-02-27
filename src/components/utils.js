import { closeByEsc } from './modal.js';

export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

export function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};
