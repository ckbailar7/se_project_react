const latitude = 38.9072;
const longitude = 77.0369;
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
  // .then((res) => {
  //   parseWeatherData(res);
  // });

  return weatherApi;
};

export const parseWeatherData = (data) => {
  // const main = data.main;
  // const tempreture = main && main.temp;
  // console.log(Math.ceil(tempreture));
  // return Math.ceil(tempreture);
  //console.log(data);

  const main = data.main;
  //console.log(main);
  const tempreture = main && main.temp;
  console.log(Math.ceil(tempreture));
  return Math.ceil(tempreture);
};
