import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import { defaultClothingItems } from "../utils/constants";
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
import "../utils/api";
import api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemperatureUnit, setCurrenTemperatureUnit] = useState("F");
  const [defaultClothingItemsArray, setDefaultClothingItemsArray] = useState(
    []
  );

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

  const onAddItem = (values) => {
    console.log(values);
    defaultClothingItemsArray.unshift(values);

    console.log(`defaultClothingItems ... `, defaultClothingItemsArray);
    setDefaultClothingItemsArray([...defaultClothingItemsArray], values);
    return values;
  };

  const handleDeleteSelectedItem = (values) => {
    console.log(`hello from handleDeleteSelectedItem ... `);
    console.log(values);
  };

  // const testTestTest = () => {
  //   console.log(`Hello from testTestTest ...`);
  // };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentLocation = parseWeatherDataName(data);
        setCurrentLocation(currentLocation);
        const weatherData = parseWeatherData(data);
        const weatherString = weatherData.temperature[currentTemperatureUnit];
        const newWeatherData = parseInt(weatherString);
        // console.log(`newWeatherData`, newWeatherData);
        //console.log(`weatherString`, weatherString);
        setTemp(newWeatherData);
        //setTemp(60);
        api
          .getItems()
          .then((data) => {
            setDefaultClothingItemsArray(data);
            console.log(defaultClothingItemsArray);
          })
          .catch((err) => {
            console.log(err);
          });
        return newWeatherData;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  // api.getItems();
  // useEffect(() => {
  //   api
  //     .getItems()
  //     .then((data) => {
  //       setDefaultClothingItemsArray(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  // useEffect(() => {
  //   function setNewItems() {
  //     api.getItems((data) => {
  //       setDefaultClothingItemsArray(data);
  //     });
  //   }
  // }, []);

  //useEffect for api fetch requests
  // useEffect(() => {
  //   function getItems() {
  //     api
  //       .getClothingItems()
  //       .then((data) => {
  //         setDefaultClothingItemsArray(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, []);

  // console.log(
  //   `Generated Cards from App UseSate([]) ... `,
  //   defaultClothingItemsArray
  // );

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
            newGeneratedCards={defaultClothingItemsArray}
          />
        </Route>
        <Route path="/profile">
          <Profile items={temp} />
        </Route>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            onCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleDeleteSelectedItem}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
