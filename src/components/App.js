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
} from "../utils/weatherApi";
import { Switch, Route } from "react-router-dom";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import "../utils/api";
import api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherData, setWeatherData] = useState({});
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

  //const temp = weatherData.temperature[currentTemperatureUnit];

  const handleToggleSwitchChange = () => {
    console.log(weatherData.temperature);
    if (currentTemperatureUnit === "F") {
      setCurrenTemperatureUnit("C");
      setTemp(weatherData.temperature["C"]);
    } else {
      setCurrenTemperatureUnit("F");
      setTemp(weatherData.temperature["F"]);
    }

    // currentTemperatureUnit === "F"
    //   ? setCurrenTemperatureUnit("C")
    //   : setCurrenTemperatureUnit("F");
  };

  const onAddItem = (values) => {
    console.log(values);

    api
      .addNewItem(values)
      .then((addedItem) => {
        setDefaultClothingItemsArray((defaultClothingItemsArray) => [
          addedItem,
          ...defaultClothingItemsArray,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   setWeatherData(weatherData);
  // });

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentLocation = parseWeatherDataName(data);
        setCurrentLocation(currentLocation);
        const weatherDataParsed = parseWeatherData(data);

        const weatherString =
          weatherDataParsed.temperature[currentTemperatureUnit];

        const newWeatherData = parseInt(weatherString);
        setWeatherData(weatherDataParsed);
        setTemp(weatherDataParsed.temperature["F"]);
        console.log(
          `weatherDataParsed`,
          weatherDataParsed[currentTemperatureUnit]
        );
        console.log(`weatherString`, weatherString);
        console.log(`newWeatherData`, newWeatherData);

        // setTemp(newWeatherData);
        // setWeatherData(newWeatherData);
        //setTemp(60);
        // api
        //   .getItems()
        //   .then((data) => {
        //     setDefaultClothingItemsArray(data);
        //     console.log(defaultClothingItemsArray);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        return newWeatherData;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((data) => {
        setDefaultClothingItemsArray(data);
        console.log(defaultClothingItemsArray);
      })
      .catch((err) => {
        console.log(err);
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

  const handleDeleteSelectedItem = (id) => {
    console.log(
      `hello from handleDeleteSelectedItem ...Current Selected ID : `,
      id
    );
    api
      .handleDeleteSelectedItem(id)
      .then(() => {
        setDefaultClothingItemsArray((defaultClothingItemsArray) =>
          defaultClothingItemsArray.filter((itemForDLT) => itemForDLT.id !== id)
        );
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Switch>
          <Route exact path="/">
            <Main
              onSelectCard={handleSelectedCard}
              weatherTemp={currentTemperatureUnit}
              currentTemp={temp}
              newGeneratedCards={defaultClothingItemsArray}
            />
          </Route>
          <Route path="/profile">
            <Profile
              currentTemp={temp}
              newGeneratedCards={defaultClothingItemsArray}
              weatherTemp={currentTemperatureUnit}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </Switch>

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
