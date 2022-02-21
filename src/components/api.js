const AUTH_TOKEN = '4c5b4ec3-9f91-4be6-8da0-79b50322f097';

function getUser () {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort7/users/me', {
    headers: {
      authorization: AUTH_TOKEN,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(err);
    }
  });
};

function getCards () {
  return fetch('https://nomoreparties.co/v1/plus-cohort7/cards', {
    headers: {
      authorization: AUTH_TOKEN,
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(err);
    }
  });
}

export default {
  getUser,
  getCards,
}