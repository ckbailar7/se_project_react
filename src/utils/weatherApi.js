const latitude = 38.9072;
const longitude = 77.0369;
const APIkey = "a897cb667f85da5c2b7bbe2afde79165";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  )
    .then((res) => {
      //console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })
    .then((res) => {
      console.log(res);
      parseWeatherData(res);
    });

  return weatherApi;
};

export const parseWeatherData = (data) => {
  //console.log(data);

  const main = data.main;
  console.log(main);
  const tempreture = main && main[0].temp;
  console.log(tempreture);
  return tempreture;
};

const response = {
  base: "stations",
  clouds: {
    all: 94,
  },
  cod: 200,
  coord: {
    lat: 38.9072,
    lon: 77.0369,
  },
  dt: 1679779588,
  id: 1281307,
  main: {
    feels_like: 48.2,
    grnd_level: 882,
    humidity: 17,
    pressure: 1014,
    sea_level: 1014,
    temp: 52.45,
    temp_max: 52.45,
    temp_min: 52.45,
  },
  name: "Dong Ostang",
  sys: {
    country: "CN",
    id: 2035660,
    sunrise: 1679791614,
    sunset: 1679836102,
    type: 2,
  },
  timezone: 28800,
  visibility: 10000,
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  wind: {
    speed: 5.53,
    deg: 73,
    gust: 5.64,
  },
};
