import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import "../blocks/Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar_component">
      <img className="sidebar_avatar-Image" src={userAvatar} alt="avatar"></img>
      <div className="sidebar_avatar-Name">Jared Girvan</div>
    </div>
  );
};

export default SideBar;
