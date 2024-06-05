export const base_URL =
  "https://my-json-server.typicode.com/ckbailar7/se_project_react";

function handleInitialResponse(res) {
  return res.ok
    ? res.json()
    : Promise.reject(
        `From Api.js handleInitialResponse() .. Error: The Request Failed ...${res.status}`
      );
}

export const getUserInfo = (token) => {
  // Send a GET request to users/me
  return fetch(`${base_URL}/profile`, {
    method: "GET",
    headers: {
      Accept: "aaplication/json",
      "Content-Type": "application/json",
      // Specify auth header with appropriatley formatted value
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

function handleRequest(url, options, token) {
  return fetch(url, options).then((res) => {
    //console.log(res);
    // console.log(`Url ... `, url);
    // console.log(`Options...`, options);
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

function addNewItem({ values }, token) {
  return handleRequest(`${base_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    Authorization: `Bearer ${token}`,
  });
}

function handleDeleteSelectedItem(id, token) {
  return handleRequest(`${base_URL}/items/${id}`, {
    method: "DELETE",
    Authorization: `Bearer ${token}`,
  });
}

const api = {
  handleInitialResponse,
  handleRequest,
  getItems,
  addNewItem,
  handleDeleteSelectedItem,
  getUserInfo,
};

export default api;
