import "../blocks/ItemModal.css";
import DeleteConfirmModal from "./DeleteConfirmModal";
//import ConfirmDeleteFormComponent from "../components/ConfirmDeleteFormComponent.js";
import { useState } from "react";

const ItemModal = ({
  selectedCard,
  onClose,
  onSelectCard,
  handleEscKeyDown,
  handleDeleteCard,
  buttonText = " Delete item ",
  onDelete,
  currentUser,
}) => {
  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__content-flex-img_deleteBtn__button ${
    isOwn
      ? "modal__content-flex-img_deleteBtn__button_visible"
      : "modal__content-flex-img_deleteBtn__button_hidden"
  }`;

  //console.log(`SelectedCard from Itemmodal.js : ... `, selectedCard);
  //console.log(`type`, typeof selectedCard);
  const [activeDeleteConfirmModal, setActiveDeleteConfirm] = useState("");
  const handleDeleteSubmit = () => {
    console.log(selectedCard);
    console.log("selectedCard ._id", selectedCard._id);
    onDelete(selectedCard._id);
  };

  const testSelectedCardScope = () => {};
  const handleCloseConfirmModal = () => {
    setActiveDeleteConfirm("");
  };

  const handleCreateDeleteConfirmModal = () => {
    setActiveDeleteConfirm("deleteConfirmPreview");
  };
  return (
    <div id="modal" onClick={onClose} className={`modal`} tabIndex="-1">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__content modal__content-Item-Modal"
      >
        <div className="modal__content-flex">
          <button
            className="modal__content-Item_close "
            type="button"
            onClick={onClose}
          />
          <div className="modal__content-flex-img_container">
            <div>
              <img
                className="modal__content-flex-img"
                alt="Selected Card Preview"
                src={selectedCard.imageUrl}
              />
            </div>
            <div className="modal__content-flex-img-name">
              {selectedCard.name}
            </div>
            <div className="modal__content-flex-img_info">
              <div className="modal__content-flex-card-weather">
                Weather: {selectedCard.weather}
              </div>
              <div className="modal__content-flex-img_deleteBtn">
                {isOwn && (
                  <button
                    className="modal__content-flex-img_deleteBtn__button"
                    type="submit"
                    //onClick={handleCreateDeleteConfirmModal}
                    onClick={handleDeleteSubmit}
                  >
                    Delete item
                  </button>
                )}
                <form
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeDeleteConfirmModal === "deleteConfirmPreview" && (
        <DeleteConfirmModal
          // handleDeleteSubmit={handleDeleteSubmit}
          onDelete={onDelete}
          selectedCard={selectedCard}
          onClose={onClose}
          onSelectCard={onSelectCard}
        />
      )}
    </div>
  );
};

export default ItemModal;
