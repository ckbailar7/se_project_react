import HeaderLogo from "../images/wtwrlogologo.svg";
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
  currentTemp,
  handleToggleSwitchChange,
}) => {
  const [value, setValue] = useState(false);
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
          onColor="#3683d0"
          isOn={value}
          handleToggle={() => setValue(!value)}
          currentTemp={currentTemp}
          handleToggleSwitchChange={handleToggleSwitchChange}
        />
        <div>
          <button
            className="header__avatar-logo_button"
            onClick={onCreateModal}
          >
            +Add New Clothes
          </button>
        </div>
        <NavLink exact to="/profile">
          <div className="header__logo">
            <div>Jared Girvan</div>
            <div>
              <img src={userAvatar} alt="avatar"></img>
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
