import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const Profile = ({
  currentTemp,
  newGeneratedCards,
  weatherTemp,
  onSelectCard,
  onCreateModal,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = currentTemp?.temperature?.[currentTemperatureUnit] || 999;

  console.log(`currentTemperatureUnit .. Profile.js`, currentTemperatureUnit);
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
          onCreateModal={onCreateModal}
          //currentTemperatureUnit={currentTemperatureUnit}
        />
      </div>
    </div>
  );
};

export default Profile;
