import api from "../utils/api.js";

const latitude = 36.174818989940526;
const longitude = -115.14960249357529;
const APIkey = "a897cb667f85da5c2b7bbe2afde79165";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(api.handleInitialResponse);
  // .catch((error) => {
  //   console.log(error);
  // });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;

  //const newNewWeatherData = parseInt(weather.temperature);
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  const weatherData = weather;

  // weather.temperature.F = `${Math.round(data.main.temp)}°F`;
  // weather.temperature.C = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
  // console.log("Weather in Fahrenheit");
  // console.log(weather.temperature.F);
  // console.log("Weather in Calcius");
  // console.log(weather.temperature.C);
  //console.log("weather.temperature", weather.temperature);
  // console.log(`weatherData - parseWeatherData`, weatherData);
  //onsole.log("newNewWeatherData - parseWeatherData", newNewWeatherData);
  return weatherData;
};

export const parseWeaterDataCelcius = (data) => {
  console.log("Weather Data from Celcius Parse >>>");
  console.log(data);
};

export const parseWeatherDataName = (data) => {
  const name = data.name;
  return name;
};
