import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";

const SideBar = () => {
  return (
    <>
      <div className="header__logo">
        <div>Jared Girvan</div>
        <div>
          <img src={userAvatar} alt="avatar"></img>
        </div>
      </div>
    </>
  );
};

export default SideBar;
