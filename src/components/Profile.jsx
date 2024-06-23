import "../blocks/Profile.css";
import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import { useEffect } from "react";

const Profile = ({
  currentTemp,
  newGeneratedCards,
  weatherTemp,
  onSelectCard,
  onCreateModal,
  currentUser,
  onCreateUpdateUserModal,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  //const temp = currentTemp?.temperature?.[currentTemperatureUnit] || 999;
  //const { email, password } = currentUser;

  const userItems = newGeneratedCards.filter(
    (item) => item.owner === currentUser._id
  );

  //Log current props
  useEffect(() => {
    console.log("Profile Component Props: ", {
      currentTemp,
      newGeneratedCards,
      weatherTemp,
      currentUser,
    });
  }, [currentTemp, newGeneratedCards, weatherTemp, currentUser]);

  if (!currentUser || Object.keys(currentUser).length === 0) {
    console.log("currentUser is not valid: ", currentUser);
    return null;
  }

  //console.log(`currentTemperatureUnit .. Profile.js`, currentTemperatureUnit);
  return (
    <div className="profile__component">
      <div className="profile__sidebar">
        <SideBar
          currentUser={currentUser}
          onCreateUpdateUserModal={onCreateUpdateUserModal}
        />
      </div>
      <div className="profile__clothes-component">
        <ClothesSection
          newGeneratedCards={userItems}
          currentTemp={currentTemp}
          weatherTemp={weatherTemp}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          currentUser={currentUser}
          //currentTemperatureUnit={currentTemperatureUnit}
        />
      </div>
    </div>
  );
};

export default Profile;
