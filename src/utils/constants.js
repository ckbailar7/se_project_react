import weatherApi from "./weatherApi";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
const latitude = 38.9072;
const longitude = 77.0369;
const APIkey = "a897cb667f85da5c2b7bbe2afde79165";

const personalApi = new weatherApi({
  baseUrl: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`,
});

export default currentDate;
