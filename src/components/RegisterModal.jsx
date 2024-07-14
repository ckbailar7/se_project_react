import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";
import { React, useEffect, useState } from "react";

const RegisterModal = ({
  onCloseModal,
  onAttemptRegistration,
  buttonText,
  handleMoveToLoginModal,
  setCurrentUser,
}) => {
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

  const handleRegistrationMoveToLogin = (e) => {
    e.preventDefault();
    handleMoveToLoginModal();
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // debugger;
  //     const response = await onAttemptRegistration(formData);
  //     if (response) {
  //       console.log(
  //         `Response from await onAttemptRegistration(formData ====> `,
  //         response
  //       );
  //       setCurrentUser(response.name);
  //       console.log("Registration Successful ");
  //       onCloseModal();
  //     } else {
  //       console.log("Registration Failed", response);
  //     }
  //   } catch (error) {
  //     console.log(`Registration Error; ${error}`);
  //   }

  //   //
  //   //
  //   //
  //   // e.preventDefault();
  //   // onAttemptRegistration(formData);
  //   // onCloseModal();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAttemptRegistration(formData);
    // .then((res) => {
    //   if (res) {
    //     onCloseModal();
    //   } else {
    //     console.error("Registration Failed");
    //   }
    // })
    // .catch((err) => console.error("Registration error:", err));
  };

  return (
    <ModalWithForm
      title="Sign Up"
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
        <div className="modal__content-ButtonContainer">
          <button className="modal__content-submitBtn" type="submit">
            {buttonText}
          </button>
          <button
            onClick={handleRegistrationMoveToLogin}
            className="modal__content-submitBtn_secondary"
            type="login"
          >
            or Login
          </button>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
