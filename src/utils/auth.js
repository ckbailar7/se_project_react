//
//

import api from "../utils/api";

export const BASE_URL = "http://localhost:3001";

export const register = ({ avatar, email, name, password }) => {
  console.log("req ==>>", { avatar, email, name, password });
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ avatar, email, name, password }),
  }).then((res) => {
    return api.handleInitialResponse(res);
    // return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    // if (!res.ok) {
    //   return Promise.reject(`Error: ${res.status}`);
    // }
    // return res.json();
  });
  // .catch((error) => {
  //   console.error("Registration Error: ", error);
  //   throw error;
  // });
};
//
//
export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return api.handleInitialResponse(res);
    // return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    // if (res.ok) {
    //   res.json();
    // } else {
    //   return Promise.reject(`Error ${res.status}`);
    // }
  });
  // .catch((err) => {
  //   console.error("Authorization Error:", err);
  //   // throw err;
  // });
};
//

//
//
