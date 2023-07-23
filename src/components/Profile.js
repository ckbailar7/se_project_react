import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ items }) => {
  console.log(items);
  return (
    <div className="profile_component">
      <div className="profile_container">
        <div className="profile_sidebar">
          <SideBar />
        </div>
        <div className="profile_clothes-component">
          <ClothesSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;
