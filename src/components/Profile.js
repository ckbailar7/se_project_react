import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({ items }) => {
  console.log(items);
  return (
    <>
      <SideBar></SideBar>
      <ClothesSection></ClothesSection>
    </>
  );
};

export default Profile;
