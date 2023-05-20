import userAvatar from "../images/userAvatar.png";

const SideBar = () => {
  return (
    <>
      <div>Jared Girvan</div>
      <div>
        <img src={userAvatar} alt="avatar"></img>
      </div>
    </>
  );
};

export default SideBar;
