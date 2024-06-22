import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { React, useEffect, useState } from "react";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ onAddItem, onCloseModal, buttonText }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSetImageUrl = (e) => {
    console.log(`ImageUrl ...`, e.target.value);
    setImageUrl(e.target.value);
  };
  const handleWeatherChange = (e) => {
    console.log(e.target.value);
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    //prevent Default behavior
    //call onAddItem with approppriate arguments
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
    onCloseModal();
  };

  const handleTestSubmitEVENT = (e) => {
    e.preventDefault();
    console.log(`From handleTestSubmitEVENT`, e);
    console.log({ name, imageUrl, weather });
    onAddItem({ name, imageUrl, weather });
    onCloseModal();
  };
  useEffect(() => {
    setName("");
    setWeather("");
    setImageUrl("");
  }, []);

  return (
    <ModalWithForm
      title="New Garment"
      onClose={onCloseModal}
      //isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Add Garment"
    >
      <div className="modalWithForm">
        <label className="modalWithForm__name">
          Name
          <input
            className="modalWithForm__name-input"
            id="name"
            type="name"
            name="name"
            minLength="1"
            maxLength="300"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
          ></input>
        </label>
        <label className="modalWithForm__image">
          Image
          <input
            className="modalWithForm__image-input"
            id="image"
            type="url"
            name="imageUrl"
            minLength="1"
            maxLength="300"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleSetImageUrl}
          ></input>
        </label>
        <p className="modalWithForm__SelectText">Select the Weather Type:</p>
        <div className="modalWithForm__radio-Btns__container">
          <div>
            <input
              name="radio"
              type="radio"
              id="hot"
              value="hot"
              onChange={handleWeatherChange}
              className={"modalWithForm__radio-Btns"}
            ></input>
            <label>Hot</label>
          </div>
          <div>
            <input
              name="radio"
              type="radio"
              id="warm"
              value="warm"
              onChange={handleWeatherChange}
              className={"modalWithForm__radio-Btns"}
            ></input>
            <label>Warm</label>
          </div>
          <div>
            <input
              name="radio"
              type="radio"
              id="cold"
              value="cold"
              onChange={handleWeatherChange}
              className={"modalWithForm__radio-Btns"}
            ></input>
            <label>Cold</label>
            <button className="modal__content-submitBtn" type="submit">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
