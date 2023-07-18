import "../blocks/ItemModal.css";
import { useState } from "react";

const ConfirmDeleteFormComponent = (selectedCard, { onDelete }) => {
  const handleDeleteSubmit = () => {
    console.log(`selectedCard & id ...`, selectedCard, selectedCard.id);
    onDelete(selectedCard.id);
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
        onClick={handleDeleteSubmit}
      >
        Delete item
      </button>
    </form>
  );
};

export default ConfirmDeleteFormComponent;
