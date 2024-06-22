import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { React, useEffect, useState } from "react";

const LoginModal = ({ onCloseModal, handleLogin, buttonText }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
    onCloseModal();
  };
  return (
    <ModalWithForm title="Login" onClose={onCloseModal} onSubmit={handleSubmit}>
      <div className="modalWithForm">
        <label className="modalWithForm__name">
          Email
          <input
            className="modalWithForm__name-input"
            id="email"
            type="email"
            name="email"
            minLength="1"
            maxLength="300"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Password
          <input
            className="modalWithForm__name-input"
            id="password"
            type="password"
            name="password"
            minLength="1"
            maxLength="300"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          ></input>
        </label>
        <button className="modal__content-submitBtn" type="submit">
          {buttonText}
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
