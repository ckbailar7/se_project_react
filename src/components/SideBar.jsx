import userAvatar from "../images/userAvatar.png";
import "../blocks/Header.css";
import "../blocks/Sidebar.css";

const SideBar = ({ currentUser, onCreateUpdateUserModal, handleSignout }) => {
  return (
    <div className="sidebar_component">
      <div className="sidebar__avatar-Image_container">
        <img
          className="sidebar_avatar-Image"
          src={currentUser.avatar}
          alt="avatar"
        ></img>
        <div className="sidebar_avatar-Name">{currentUser.name}</div>
      </div>

      <button
        className="header__avatar-logo_button"
        onClick={onCreateUpdateUserModal}
      >
        Change Profile Data
      </button>
      <button className="header__avatar-logo_button" onClick={handleSignout}>
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
