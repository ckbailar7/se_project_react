// class weatherApi {
//   constructor(options) {
//     this._baseUrl = options.baseurl;
//     this._APIkey = options.APIkey;
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

//   getLocalWeather() {
//     return this._request(`${this._baseUrl}`, `${this._APIkey}`);
//   }
// }

// export default weatherApi;

//https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// export const getLocalWeather = (options, APIkey) => {
//   const latitude = options.latitude;
//   const longitude = options.longitude;

//   return fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   ).then((res) => {
//     if (res.ok) {
//       res.json();
//     } else {
//       Promise.reject(`Error: ${res.status}`);
//     }
//   });
// };
const latitude = 38.9072;
const longitude = 77.0369;
const APIkey = "a897cb667f85da5c2b7bbe2afde79165";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      console.log(res);
      if (res.ok) {
        res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      console.log(res);
    });

  return weatherApi;
};
