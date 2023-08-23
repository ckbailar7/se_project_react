import "../blocks/ItemModal.css";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ConfirmDeleteFormComponent from "./ConfirmDeletFormComponent";
import { useState } from "react";

const ItemModal = ({
  selectedCard,
  onClose,
  handleEscKeyDown,
  handleDeleteCard,
  buttonText = " Delete item ",
  onDelete,
}) => {
  const [activeDeleteConfirmModal, setActiveDeleteConfirm] = useState("");
  const handleDeleteSubmit = () => {
    console.log(selectedCard);
    onDelete(selectedCard.id);
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
            <div className="modal__content-flex-card-weather">
              Weather: {selectedCard.weather}
            </div>
            <div className="modal__content-flex-img_deleteBtn">
              <form
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              <button
                className="modal__content-flex-img_deleteBtn__button"
                type="submit"
                onClick={handleCreateDeleteConfirmModal}
                // onClick={handleDeleteSubmit}
              >
                Delete item
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeDeleteConfirmModal === "deleteConfirmPreview" && (
        <DeleteConfirmModal />
      )}
    </div>
  );
};

export default ItemModal;
