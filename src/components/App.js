import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherDataName,
  //parseWeaterDataCelcius,
} from "../utils/weatherApi";
import { Route } from "react-router-dom";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemperatureUnit, setCurrenTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrenTemperatureUnit("C")
      : setCurrenTemperatureUnit("F");
  };

  const handleAddItemSubmit = () => {};

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentLocation = parseWeatherDataName(data);
        setCurrentLocation(currentLocation);
        const weatherData = parseWeatherData(data);
        const weatherString = weatherData.temperature[currentTemperatureUnit];
        const newWeatherData = parseInt(weatherString);
        console.log(`newWeatherData`, newWeatherData);
        //console.log(`weatherString`, weatherString);
        setTemp(newWeatherData);
        //setTemp(60);

        return newWeatherData;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);
  //console.log("Hello from App.js");
  //console.log(temp);
  // Important Variables : temp, currentTemperatureUnit
  return (
    <div id="content__container">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          currentLocation={currentLocation}
          currentTemp={temp}
          handleToggleSwitchChange={handleToggleSwitchChange}
        />
        <Route path="/">
          <Main
            onSelectCard={handleSelectedCard}
            weatherTemp={currentTemperatureUnit}
            currentTemp={temp}
          />
        </Route>
        <Route path="/profile">
          <Profile items={temp} />
        </Route>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onCloseModal={handleCloseModal}
            isOpen={handleCreateModal}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
