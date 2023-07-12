// export const base_URL =
//   "https://my-json-server.typicode.com/ckbailar7/se_project_react";

// export const handleInitialResponse = (res) => {
//   return res.ok
//     ? res.json()
//     : Promise.reject(`Error : The Request Failed: ${res.status}`);
// };

// export const sendRequest = (url, options) => {
//   fetch(url, options).then(handleInitialResponse);
// };

// export const getClothingItems = () => {
//   return sendRequest(`${base_URL}/items`, {
//     headers: { "Content-Type": "application/json" },
//   });
// };

// const api = { getClothingItems };

// export default api;

export const base_URL =
  "https://my-json-server.typicode.com/ckbailar7/se_project_react";

function handleInitialResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(
        `From Api.js handleInitialResponse() .. Error: The Request Failed ...${res.status}`
      );
}

function handleRequest(url, options) {
  return fetch(url, options).then((res) => {
    console.log(res);
    console.log(`Url ... `, url);
    console.log(`Options...`, options);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
}

function getItems() {
  return handleRequest(`${base_URL}/items`, {
    method: "GET",
  });
}

function addNewItem({ name, imageUrl, weather }) {
  return handleRequest(`${base_URL}/items`, {
    method: "POST",
    body: { name: name, imageUrl: imageUrl, weather: weather },
  });
}

const api = { handleInitialResponse, handleRequest, getItems, addNewItem };

export default api;

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// export default api;

// class Api {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//     this._headers = options.headers;
//   }

//   getData() {
//     return Promise.all([this.getUserInfo(), this.getCardList()]);
//   }

//   _request(url, options) {
//     return fetch(url, options).then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         return Promise.reject(`Error: ${res.status}`);
//       }
//     });
//   }

//   getUserInfo() {
//     return this._request(`${this._baseUrl}/users/me`, {
//       headers: this._headers,
//     });
//   }

//   getCardList() {
//     return this._request(`${this._baseUrl}/cards`, {
//       headers: this._headers,
//     });
//   }

//   updateUserInfo(name, about) {
//     return this._request(`${this._baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: this._headers,
//       body: JSON.stringify({
//         name: name,
//         about: about,
//       }),
//     });
//   }

//   updateProfilePicture(avatar) {
//     return this._request(`${this._baseUrl}/users/me/avatar`, {
//       method: "PATCH",
//       headers: this._headers,
//       body: JSON.stringify({
//         avatar: avatar,
//       }),
//     });
//   }

//   addCard({ name, link }) {
//     return this._request(`${this._baseUrl}/cards`, {
//       method: "POST",
//       headers: this._headers,
//       body: JSON.stringify({
//         name,
//         link,
//       }),
//     });
//   }

//   removeCard(cardID) {
//     return this._request(`${this._baseUrl}/cards/${cardID}`, {
//       method: "DELETE",
//       headers: this._headers,
//     }).catch((err) => {
//       console.log(err);
//     });
//   }

//   addLike(cardId) {
//     return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: "PUT",
//       headers: this._headers,
//     }).then((res) => {
//       return res;
//     });
//   }

//   removeLike(cardId) {
//     return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: "DELETE",
//       headers: this._headers,
//     }).then((res) => {
//       return res;
//     });
//   }
// }

// export default Api;
