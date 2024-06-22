import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { React, useEffect, useState } from "react";

const RegisterModal = ({ onCloseModal, onAttemptRegistration, buttonText }) => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //prevent Default behavior
    //call onAddItem with approppriate arguments
    e.preventDefault();
    onAttemptRegistration(formData);
    onCloseModal();
  };
  return (
    <ModalWithForm
      title="Register"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <div className="modalWithForm">
        <label className="modalWithForm__name">
          Name
          <input
            className="modalWithForm__name-input"
            id="name"
            type="text"
            name="name"
            minLength="1"
            maxLength="300"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Avatar
          <input
            className="modalWithForm__name-input"
            id="avatar"
            type="text"
            name="avatar"
            minLength="1"
            maxLength="300"
            placeholder="Avatar"
            onChange={handleChange}
            value={formData.avatar}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Email
          <input
            className="modalWithForm__name-input"
            id="email"
            type="email"
            name="email"
            minLength="1"
            maxLength="300"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Password
          <input
            className="modalWithForm__name-input"
            id="password"
            type="Password"
            name="password"
            minLength="1"
            maxLength="300"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Confirm Password
          <input
            className="modalWithForm__name-input"
            id="confirmpassword"
            type="password"
            name="confirmPassword"
            minLength="1"
            maxLength="300"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
          ></input>
        </label>
        <button className="modal__content-submitBtn" type="submit">
          {buttonText}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
