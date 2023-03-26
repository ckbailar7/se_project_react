import HeaderLogo from "../images/wtwrlogologo.svg";
import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import currentDate from "../utils/constants";

const Header = ({ onCreateModal, currentLocation }) => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src={HeaderLogo} alt="logo"></img>
          </div>
          <div>
            <p>{currentDate},</p>
          </div>
          <div>
            <p>{currentLocation}</p>
          </div>
        </div>
        <div className="header__avatar-logo">
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
    </>
  );
};

export default Header;
