import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import {
  getForecastWeather,
  parseWeatherData,
  parseWeatherDataName,
} from "../utils/weatherApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");

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

  useEffect(() => {
    getForecastWeather().then((data) => {
      const tempreture = parseWeatherData(data);
      setTemp(tempreture);
    });
  }, []);

  useEffect(() => {
    getForecastWeather().then((data) => {
      const currentLocation = parseWeatherDataName(data);
      setCurrentLocation(currentLocation);
    });
  });

  console.log(currentLocation);

  return (
    <div>
      <Header
        onCreateModal={handleCreateModal}
        currentLocation={currentLocation}
      />
      <Main onSelectCard={handleSelectedCard} weatherTemp={temp} />
      <Footer />

      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modalWithForm">
            <label className="modalWithForm__name">
              Name
              <input
                className="modalWithForm__name-input"
                type="name"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              ></input>
            </label>
            <label className="modalWithForm__image">
              Image
              <input
                className="modalWithForm__image-input"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image URL"
              ></input>
            </label>
            <p className="modalWithForm__SelectText">
              Select the Weather Type:
            </p>
            <div className="modalWithForm__radio-Btns__container">
              <div>
                <input type="radio" id="hot" value="hot"></input>
                <label>Hot</label>
              </div>
              <div>
                <input type="radio" id="warm" value="warm"></input>
                <label>Warm</label>
              </div>
              <div>
                <input type="radio" id="cold" value="cold"></input>
                <label>Cold</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
