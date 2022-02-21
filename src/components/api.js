const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort7',
  headers: {
    authorization: '4c5b4ec3-9f91-4be6-8da0-79b50322f097',
    'Content-Type': 'application/json',
  }
};

function baseResponseHandler (res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(err);
  }
}

function getUser () {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
  .then(baseResponseHandler);
};

function getCards () {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
  .then(baseResponseHandler);
};

function updateUser (name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name,
      about
    })
  })
  .then(baseResponseHandler)
}

export default {
  getUser,
  getCards,
  updateUser,
}