import "../blocks/ItemModal.css";
import ConfirmDeleteFormComponent from "./confirmDeletFormComponent";

const ItemModal = ({
  selectedCard,
  onClose,
  handleEscKeyDown,
  handleDeleteCard,
  buttonText = " Delete item ",
  onDelete,
}) => {
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
              {/* //confirmDeleteFormComponent
              <form onSubmit={handleDeleteCard}>
                <button
                  className="modal__content-flex-img_deleteBtn__button"
                  type="submit"
                >
                  {buttonText}
                </button>
              </form> */}
              <ConfirmDeleteFormComponent selectedCard={selectedCard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
