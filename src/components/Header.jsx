import HeaderLogo from "/public/images/wtwrlogologo.svg";
import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import currentDate from "../utils/constants";
//import Switch from "./Switch";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

const Header = ({
  onCreateModal,
  currentLocation,
  // currentTemp,
  temp,
  handleToggleSwitchChange,
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <NavLink exact to="/">
            <img src={HeaderLogo} alt="logo"></img>
          </NavLink>
        </div>
        <div className="header__logo-date">
          <p>{currentDate}, </p>
          <p>{currentLocation}</p>
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch
          currentTemp={temp}
          handleToggleSwitchChange={handleToggleSwitchChange}
        />

        <button className="header__avatar-logo_button" onClick={onCreateModal}>
          + Add clothes
        </button>

        <NavLink exact to="/profile">
          <div className="header__logo-profile_container">
            <div className="header__logo-profile_name">Jared Girvan</div>

            <img
              className="header__logo-profile_image"
              src={userAvatar}
              alt="avatar"
            ></img>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
