import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import "../blocks/SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar_component">
        <div className="sidebar_container">
          <img
            className="sidebar_avatar-Image"
            src={userAvatar}
            alt="avatar"
          ></img>
          <div className="sidebar_avatar-Name">Jared Girvan</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
