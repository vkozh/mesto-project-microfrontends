class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _fetch(path, method, bodyObject, renderLoading) {
    if (renderLoading) renderLoading(true);
    return fetch(`${this._url}${path}`, {
      method: method,
      headers: this._headers,
      withCredentials: true,
      credentials: "include",
      body: bodyObject ? JSON.stringify(bodyObject) : undefined,
    })
      .then(this._checkResponse)
      .finally(() => {
        if (renderLoading) renderLoading(false);
      });
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUser() {
    return this._fetch("/users/me", "GET");
  }

  getCards() {
    return this._fetch("/cards", "GET");
  }

  editProfile(name, about, renderLoading) {
    return this._fetch(
      "/users/me",
      "PATCH",
      {
        name: name,
        about: about,
      },
      renderLoading
    );
  }

  addCard(name, link, renderLoading) {
    return this._fetch(
      "/cards",
      "POST",
      { name, link },
      renderLoading
    );
  }

  deleteCard(cardId) {
    return this._fetch(`/cards/${cardId}`, "DELETE");
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked
      ? this._fetch(`/cards/${cardId}/likes`, "PUT")
      : this._fetch(`/cards/${cardId}/likes`, "DELETE");
  }

  changeAvatar(avatar, renderLoading) {
    return this._fetch(
      "/users/me/avatar",
      "PATCH",
      {
        avatar: avatar,
      },
      renderLoading
    );
  }
}

const api = new Api({
  baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
  headers: { "Content-Type": "application/json" },
});
export default api;
