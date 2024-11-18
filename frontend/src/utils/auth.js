class Auth {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _fetch(path, method, header = {}, bodyObject) {
    return fetch(`${this._url}${path}`, {
      method: method,
      withCredentials: true,
      credentials: "include",
      headers: { ...header, "Content-Type": "application/json" },
      body: bodyObject ? JSON.stringify(bodyObject) : undefined,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    let status = res.status;
    return res.json().then((data) => {
      const error = new Error(Object.values(data));
      error.code = status;
      throw error;
    });
  }

  register(password, email) {
    return this._fetch("/signup", "POST", {}, { password, email });
  }

  login(password, email) {
    return this._fetch("/signin", "POST", {}, { password, email });
  }

  logout() {
    return this._fetch("/signout", "POST", {}, {});
  }

  getUser(jwt) {
    return this._fetch("/users/me", "GET", { Authorization: `Bearer ${jwt}` });
  }
}

const auth = new Auth({
  baseUrl: `//localhost:3001`,
});
export default auth;
