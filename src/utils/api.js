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

function addNewItem(values) {
  return handleRequest(`${base_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
}

function handleDeleteSelectedItem(id) {
  return handleRequest(`${base_URL}/items/${id}`, {
    method: "DELETE",
  });
}

const api = {
  handleInitialResponse,
  handleRequest,
  getItems,
  addNewItem,
  handleDeleteSelectedItem,
};

export default api;
