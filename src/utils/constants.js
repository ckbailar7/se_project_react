// import weatherApi from "./weatherApi";

// const currentDate = new Date().toLocaleString("default", {
//   month: "long",
//   day: "numeric",
// });
// //WashingtonDC Coordinates
// export const localSelectors = {
//   latitude: "38.9072",
//   longitude: "77.0369",
//   APIkey: "a897cb667f85da5c2b7bbe2afde79165",
// };

// export const personalApi = new weatherApi({
//   baseUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${localSelectors.latitude}&lon=${localSelectors.longitude}&units=imperial&appid=${localSelectors.APIkey}`,
// });

// export default currentDate;
//WashingtonDC Coordinates
export const localSelectors = {
  latitude: "38.9072",
  longitude: "77.0369",
  APIkey: "a897cb667f85da5c2b7bbe2afde79165",
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export default currentDate;
