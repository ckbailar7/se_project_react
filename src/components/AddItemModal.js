import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { useState } from "react";
import React from "react";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  // declare state for each input field
  // const [name, setName] = React.useState("");
  // const [imageUrl, setImageUrl] = React.useState("");
  // const [weather, setWeather] = React.useState("");

  const setName = () => {
    console.log("Hello from setName");
  };

  const handleSetImageUrl = () => {
    console.log("Hello from handleSetImageUrl");
  };

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  // create onChange handlers corresponding to each state variable

  function handleSubmit(e) {
    //prevent Default behavior
    //call onAddItem with approppriate arguments
  }

  return (
    <ModalWithForm title="New Garment" onClose={onCloseModal}>
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
            onChange={setName}
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
            onChange={handleSetImageUrl}
          ></input>
        </label>
        <p className="modalWithForm__SelectText">Select the Weather Type:</p>
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
  );
};

export default AddItemModal;
