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
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(
    `From Api.js handleInitialResponse() .. Error: The Request Failed ...${res.status}`
  );
}

const api = { handleInitialResponse };

export default api;
