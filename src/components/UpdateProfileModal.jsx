import "../blocks/ItemModal.css";

import ModalWithForm from "./ModalWithForm";

import { React, useState } from "react";

const UpdateProfileModal = ({ onCloseModal, buttonText, onCreateModal }) => {
  const [formData, setFormData] = useState({
    avatar: "",
    name: "",
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
    onCloseModal();
  };

  return (
    <ModalWithForm
      title="Update Profile"
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
            type="url"
            name="avatar"
            minLength="1"
            maxLength="300"
            placeholder="url"
            onChange={handleChange}
            value={formData.avatar}
          ></input>
        </label>
      </div>
    </ModalWithForm>
  );
};

export default UpdateProfileModal;
