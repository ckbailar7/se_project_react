import Night from "/public/images/Night/Night.svg";
import NightCloudy from "/public/images/Night/Night-Cloudy.svg";
import NightRain from "/public/images/Night/Night-Rain.svg";
import NightStorm from "/public/images/Night/Night-Storm.svg";
import NightSnow from "/public/images/Night/Night-Snow.svg";
import NightFog from "/public/images/Night/Night-Fog.svg";

import Sunny from "/public/images/Sunny/Sunny.svg";
import SunnyCloudy from "/public/images/Sunny/Sunny-Cloudy.svg";
import SunnyRain from "/public/images/Sunny/Sunny-Rain.svg";
import SunnyStorm from "/public/images/Sunny/Sunny-Storm.svg";
import SunnySnow from "/public/images/Sunny/Sunny-Snow.svg";
import SunnyFog from "/public/images/Sunny/Sunny-Fog.svg";

export const localSelectors = {
  latitude: "38.9072",
  longitude: "77.0369",
  APIkey: "a897cb667f85da5c2b7bbe2afde79165",
  modalSelector: document.querySelector(".modal"),
};

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

export const weatherOptions = [
  {
    url: { Sunny },
    day: true,
    type: "Sunny",
  },
  {
    url: { SunnyCloudy },
    day: true,
    type: "Sunny-Cloudy",
  },
  {
    url: { SunnyRain },
    day: true,
    type: "Sunny-Rain",
  },
  {
    url: { SunnyStorm },
    day: true,
    type: "Sunny-Storm",
  },
  {
    url: { SunnySnow },
    day: true,
    type: "Sunny-Snow",
  },
  {
    url: { SunnyFog },
    day: true,
    type: "Sunny-Fog",
  },
  {
    url: { Night },
    day: false,
    type: "Night",
  },
  {
    url: { NightCloudy },
    day: false,
    type: "Night-Cloudy",
  },
  {
    url: { NightRain },
    day: false,
    type: "Night-Rain",
  },
  {
    url: { NightStorm },
    day: false,
    type: "Night-Storm",
  },
  {
    url: { NightSnow },
    day: false,
    type: "Night-Snow",
  },
  {
    url: { NightFog },
    day: false,
    type: "Night-Fog",
  },
];

// export const defaultClothingItems = [
//   {
//     _id: 0,
//     name: "Cap",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
//   },
//   {
//     _id: 1,
//     name: "Hoodie",
//     weather: "warm",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
//   },
//   {
//     _id: 2,
//     name: "Jacket",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
//   },
//   {
//     _id: 3,
//     name: "Sneakers",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
//   },
//   {
//     _id: 4,
//     name: "T-Shirt",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//   },
//   {
//     _id: 5,
//     name: "Winter coat",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
//   },
// ];

//BaseUrl
//Handle Initial Server Response(res)
//Add Item = POST request ... double check back when learning about server side development
const base_URL = "http://localhost:3001";

//Add Items
//GET https://localhost:3001/items

export default currentDate;
