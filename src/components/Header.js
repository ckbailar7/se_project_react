import HeaderLogo from "../images/wtwrlogologo.svg";
import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import currentDate from "../utils/constants";
import ToggleSwitch from "./ToggleSwitch";
// import Switch from "./Switch";
import { useState } from "react";

const Header = ({ onCreateModal, currentLocation }) => {
  const [value, setValue] = useState(false);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={HeaderLogo} alt="logo"></img>
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
        />
        {/* <Switch
          onColor="#3683d0"
          isOn={value}
          handleToggle={() => setValue(!value)}
        /> */}
        <div>
          <button
            className="header__avatar-logo_button"
            onClick={onCreateModal}
          >
            +Add New Clothes
          </button>
        </div>
        <div>Jared Girvan</div>
        <div>
          <img src={userAvatar} alt="avatar"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
