import { getToken } from "./token";

const base_URL = "http://localhost:3001";

const headers = () => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
};

const handleInitialResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Request failed with status ${res.status}`);
  }
};

const handleRequest = (url, options) => {
  return fetch(url, options).then(handleInitialResponse);
};

export const getUserInfo = async () => {
  try {
    const response = await fetch(`${base_URL}/users/me`, {
      headers: headers(),
    });
    if (!response.ok) throw new Error("Failed to fetch user info");
    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch user info: ${error.message} `);
  }
};

const getItems = () => {
  return handleRequest(`${base_URL}/items`, {
    method: "GET",
  });
};

const addNewItem = async (name, imageUrl, weather) => {
  try {
    const response = await fetch(`${base_URL}/items`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ name, imageUrl, weather }),
    });
    if (!response.ok) throw new Error("Failed to add new item");
    return response.json();
  } catch (error) {
    throw new Error(`Failed to add new item: ${error.message}`);
  }
};

const handleDeleteSelectedItem = async (id, token) => {
  try {
    const response = await fetch(`${base_URL}/items/${id}`, {
      method: "DELETE",
      headers: headers(),
      body: JSON.stringify({ id, token }),
    });
    if (!response.ok) throw new Error("Failed to delete item");
    return response.json();
  } catch (error) {
    throw new Error(`Failed to delete item : ${error.message}`);
  }

  // return handleRequest(`${base_URL}/items/${id}`, {
  //   method: "DELETE",
  //   Authorization: `Bearer ${token}`,
  // });
};

const api = {
  handleInitialResponse,
  handleRequest,
  getItems,
  addNewItem,
  handleDeleteSelectedItem,
  getUserInfo,
};

export default api;
