import "../blocks/ItemModal.css";
import { useState } from "react";
import { defaultClothingItems } from "../utils/constants";

const ConfirmDeleteFormComponent = (selectedCard) => {
  // const [inputValue, setInputValue] = useState("");
  // const [defaultClothingItemsArray, setDefaultClothingItemsArray] =
  //   useState(defaultClothingItems);
  // const filterDltArr = defaultClothingItems.filter((item) => {
  //   item !== selectedCard;
  // });
  //console.log(filterDltArr);

  const handleDeleteButtonClick = (e) => {
    e.preventDefault();
    console.log(`You clicked the delete button ...`);
    console.log(`selectedCard ... `, selectedCard);

    const newShallowArr = defaultClothingItems.filter((item) => {
      return item._id === selectedCard.selectedCard._id;
    });
    console.log(`newShallowArr ... `, newShallowArr);
    return newShallowArr;
  };

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <button
        className="modal__content-flex-img_deleteBtn__button"
        type="submit"
        onClick={handleDeleteButtonClick}
      >
        Delete item
      </button>
    </form>
  );
};

export default ConfirmDeleteFormComponent;
