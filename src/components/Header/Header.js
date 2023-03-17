import HeaderLogo from "../images/wtwrlogologo.svg";
import userAvatar from "../images/userAvatar.png";
import "../Header/Header.css";
import currentDate from "../constants/constants";

function Header() {
  return (
    <>
      <div className="header__container">
        <img
          className="header__userAvatar"
          src={userAvatar}
          alt="User Avatar"
        />
        <h4 className="header__username">Jared Girvan</h4>
        <button className="header__button">+ Add clothes</button>
        <div className="header__date">{currentDate}</div>
        <img className="header__logo" src={HeaderLogo} alt="headerlogo" />
      </div>
    </>
  );
}

export default Header;
