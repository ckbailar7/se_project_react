import HeaderLogo from "../images/wtwrlogologo.svg";
import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import currentDate from "../utils/constants";
//import Switch from "./Switch";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  onCreateRegisterModal,
  currentLocation,
  onCreateLoginModal,
  // currentTemp,
  temp,
  handleToggleSwitchChange,
  isLoggedIn,
  currentUser,
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <NavLink to="/">
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
        {isLoggedIn ? (
          <>
            <button
              className="header__avatar-logo_button"
              onClick={onCreateModal}
            >
              + Add clothes
            </button>
            <NavLink to="/profile">
              <div className="header__logo-profile_container">
                <div className="header__logo-profile_name">
                  {currentUser && currentUser.name}
                </div>
                {currentUser && currentUser.userAvatar ? (
                  <img
                    className="header__logo-profile_image"
                    src={currentUser.userAvatar}
                    alt="avatar"
                  />
                ) : (
                  <div className="header__logo-profile_initial">
                    {currentUser && currentUser.username
                      ? currentUser.username[0].toUpperCase()
                      : "F"}
                  </div>
                )}
              </div>
            </NavLink>
          </>
        ) : (
          <>
            <button
              className="header__avatar-logo_button"
              onClick={onCreateLoginModal}
            >
              Login
            </button>

            <button
              className="header__avatar-logo_button"
              onClick={onCreateRegisterModal}
            >
              Register
            </button>

            <NavLink to="/profile">
              <div className="header__logo-profile_container">
                <div className="header__logo-profile_name">
                  {currentUser.name}
                </div>
                {currentUser.userAvatar ? (
                  <img
                    className="header__logo-profile_image"
                    src={currentUser.userAvatar}
                    alt="avatar"
                  />
                ) : (
                  <div className="header__logo-profile_initial">
                    {currentUser.name ? currentUser.name[0].toUpperCase() : "F"}
                  </div>
                )}
              </div>
            </NavLink>

            {/* <NavLink exact to="/profile"> */}
            {/* {currentUser.userAvatar ? (
              <NavLink exact to="/profile">
                <div className="header__logo-profile_container">
                  <div className="header__logo-profile_name">
                    {currentUser.name}
                  </div>
                  {currentUser.userAvatar ? (
                    <img
                      className="header__logo-profile_image"
                      src={currentUser.userAvatar}
                      alt="avatar"
                    />
                  ) : (
                    <div className="header__logo-profile_initial">
                      {currentUser.name
                        ? currentUser.name[0].toUpperCase()
                        : "F"}
                    </div>
                  )}
                </div>
              </NavLink>
            ) : (
              <NavLink exact to="/profile">
                <div className="header__logo-profile_container">
                  <div className="header__logo-profile_name">
                    {currentUser.name}
                  </div>
                  {currentUser.userAvatar ? (
                    <img
                      className="header__logo-profile_image"
                      src={currentUser.userAvatar}
                      alt="avatar"
                    />
                  ) : (
                    <div className="header__logo-profile_initial">
                      {currentUser.name
                        ? currentUser.name[0].toUpperCase()
                        : "F"}
                    </div>
                  )}
                </div>
              </NavLink>
            )} */}

            {/* </NavLink> */}
          </>
        )}

        {/* // <button className="header__avatar-logo_button" onClick={onCreateModal}>
        //   + Add clothes
        // </button> */}

        {/* <button
          className="header__avatar-logo_button"
          onClick={onCreateLoginModal}
        >
          Login
        </button>

        <button
          className="header__avatar-logo_button"
          onClick={onCreateRegisterModal}
        >
          Register
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
        </NavLink> */}
      </div>
    </header>
  );
};

export default Header;
