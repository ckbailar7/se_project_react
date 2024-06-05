import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { React, useEffect, useState } from "react";

const RegisterModal = ({ onCloseModal, onAttemptRegistration }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
    // const { name, value } = e.target;
    // setData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handleSetAvatar = (e) => {
    console.log(`Avatar ...`, e.target.value);
    setAvatar(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    console.log(e.target.value);
    setConfirmPassword(e.targetValue);
  };

  const handleSubmit = (e) => {
    //prevent Default behavior
    //call onAddItem with approppriate arguments
    e.preventDefault();
    onAttemptRegistration({ data });
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
            type="name"
            name="name"
            minLength="1"
            maxLength="300"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Avatar
          <input
            className="modalWithForm__name-input"
            id="avatar"
            type="name"
            name="avatar"
            minLength="1"
            maxLength="300"
            placeholder="Avatar"
            onChange={handleSetAvatar}
            value={avatar}
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
            onChange={handleEmailChange}
            value={email}
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
            onChange={handlePasswordChange}
            value={password}
          ></input>
        </label>
        <label className="modalWithForm__name">
          Confirm Password
          <input
            className="modalWithForm__name-input"
            id="Confirmpassword"
            type="Password"
            name="Confirmpassword"
            minLength="1"
            maxLength="300"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
