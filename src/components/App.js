import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import "../blocks/App.css";
import { useState, useEffect } from "react";
import { getForecastWeather } from "../utils/weatherApi";

function App() {
  const weatherTemp = "75°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [temp, setTemp] = useState(0);

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
    getForecastWeather();
  }, []);

  console.log(selectedCard);
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main onSelectCard={handleSelectedCard} weatherTemp={weatherTemp} />
      <Footer />

      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            Name
            <input type="name" name="name" minLength="1" maxLength="30"></input>
          </label>
          <label>
            Image
            <input type="url" name="link" minLength="1" maxLength="30"></input>
          </label>
          <p>Select the Wether Type:</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot"></input>
              <label>Hot</label>
              <input type="radio" id="warm" value="warm"></input>
              <label>Warm</label>
              <input type="radio" id="cold" value="cold"></input>
              <label>Cold</label>
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
