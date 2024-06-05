import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ProtectedRoute from "./ProtectedRoute";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Profile from "./Profile";
import AddItemModal from "./AddItemModal";
import { register, authorize } from "../utils/auth";
import { getToken, setToken } from "../utils/token";

// import { defaultClothingItems } from "../utils/constants";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherDataName,
} from "../utils/weatherApi";
import { Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../utils/api";
import api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherData, setWeatherData] = useState({});
  const [currentLocation, setCurrentLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [defaultClothingItemsArray, setDefaultClothingItemsArray] = useState(
    []
  );

  // Sets isLoggedIn default value to false
  const [currentUser, setCurrentUser] = useState({ username: "", email: "" });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleRegistrationModal = () => {
    setActiveModal("register");
  };

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

  //const temp = weatherData.temperature;
  //console.log(weatherData.temperature[`${currentTemperatureUnit}`]);
  //console.log(`weatherData.temperature.C`, weatherData.temperature.C);
  //console.log(`currentTemperatureUnit`, currentTemperatureUnit);
  console.log(weatherData.temperature);

  // const handleToggleSwitchChange = () => {
  //   if (currentTemperatureUnit === "F") {
  //     setCurrenTemperatureUnit("C");
  //     setTemp(weatherData.temperature["C"]);
  //   } else {
  //     setCurrenTemperatureUnit("F");
  //     setTemp(weatherData.temperature["F"]);
  //   }

  //   // currentTemperatureUnit === "F"
  //   //   ? setCurrenTemperatureUnit("C")
  //   //   : setCurrenTemperatureUnit("F");
  // };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    console.log(`From onAddItem ... <3`);
    console.log(values);

    api
      .addNewItem(values)
      .then((addedItem) => {
        setDefaultClothingItemsArray((defaultClothingItemsArray) => [
          addedItem,
          ...defaultClothingItemsArray,
        ]);
        console.log(`Added Item`, addedItem);
        console.log(`Default ClothingItemsArray`, defaultClothingItemsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAttemptRegistration = (data) => {
    register(data)
      .then((res) => {
        // TODO
        console.log(res);
        localStorage.setItem("jwt", res.token);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    authorize(email, password)
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          setToken(data.jwt);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          const redirectPath = location.state?.from?.pathname || "/main";
          navigate(redirectPath);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    //api call
    api
      .getUserInfo(jwt)
      .then(({ email, password }) => {
        //
        setIsLoggedIn(true);
        setCurrentUser({ email, password });
        const redirectPath = location.state?.from?.pathname || "/main";
        navigate(redirectPath);
      })
      .catch((err) => {
        console.log(err);
      });

    // TODO - handle JWT
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const currentLocation = parseWeatherDataName(data);
        setCurrentLocation(currentLocation);
        const temperature = parseWeatherData(data);

        setWeatherData(temperature);
        setTemp(temperature);
        console.log(`weatherDataParsed`, temperature);
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
        //console.log(defaultClothingItemsArray);
      })
      .catch((err) => {
        console.log(err);
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

  const handleDeleteSelectedItem = (id) => {
    console.log(
      `hello from handleDeleteSelectedItem ...Current Selected ID : `,
      id
    );
    api
      .handleDeleteSelectedItem(id)
      .then(() => {
        setDefaultClothingItemsArray((defaultClothingItemsArray) =>
          defaultClothingItemsArray.filter((item) => item.id !== id)
        );
        handleCloseModal();
      })
      // .then(() => {
      //   handleCloseModal();
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(`currentTemperatureUnit`, currentTemperatureUnit);

  return (
    <div id="content__container">
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onCreateRegisterModal={handleRegistrationModal}
            onCreateLoginModal={handleLoginModal}
            currentLocation={currentLocation}
            temp={temp}
            handleToggleSwitchChange={handleToggleSwitchChange}
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  onSelectCard={handleSelectedCard}
                  weatherTemp={temp}
                  //currentTemp={temp}
                  newGeneratedCards={defaultClothingItemsArray}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    currentTemp={temp}
                    newGeneratedCards={defaultClothingItemsArray}
                    weatherTemp={currentTemperatureUnit}
                    onSelectCard={handleSelectedCard}
                    onCreateModal={handleCreateModal}
                    isLoggedIn={isLoggedIn}
                  />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="*"
              element={
                isLoggedIn ? (
                  <Navigate to="/Main" replace />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onCloseModal={handleCloseModal}
              onAddItem={onAddItem}
            />
          )}

          {activeModal === "preview" && (
            <ItemModal
              onSelectCard={handleSelectedCard}
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              //onDelete={handleTESTDeleteItem}
              onDelete={handleDeleteSelectedItem}
            />
          )}

          {activeModal === "register" && (
            <RegisterModal
              onCloseModal={handleCloseModal}
              onAttemptRegistration={onAttemptRegistration}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onCloseModal={handleCloseModal}
              handleLogin={handleLogin}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
