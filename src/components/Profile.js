import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";

const Profile = ({
  currentTemp,
  newGeneratedCards,
  weatherTemp,
  onSelectCard,
}) => {
  return (
    <div className="profile__component">
      <div className="profile__sidebar">
        <SideBar />
      </div>
      <div className="profile__clothes-component">
        <ClothesSection
          newGeneratedCards={newGeneratedCards}
          currentTemp={currentTemp}
          weatherTemp={weatherTemp}
          onSelectCard={onSelectCard}
        />
      </div>
    </div>
  );
};

export default Profile;
