import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import "../blocks/Sidebar.css";

const SideBar = ({ currentUser, onCreateUpdateUserModal }) => {
  return (
    <div className="sidebar_component">
      <img
        className="sidebar_avatar-Image"
        src={currentUser.avatar}
        alt="avatar"
      ></img>
      <div className="sidebar_avatar-Name">{currentUser.name}</div>

      <button onClick={onCreateUpdateUserModal}>Update Profile</button>
    </div>
  );
};

export default SideBar;
