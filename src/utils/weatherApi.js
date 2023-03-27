const latitude = 36.174818989940526;
const longitude = -115.14960249357529;
const APIkey = "a897cb667f85da5c2b7bbe2afde79165";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  // const name = data.name;
  // //console.log(name);
  const tempreture = main && main.temp;
  return Math.ceil(tempreture);
};

export const parseWeatherDataName = (data) => {
  const name = data.name;
  console.log(name);
  return name;
};
