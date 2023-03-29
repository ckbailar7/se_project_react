import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleEscKeyDown }) => {
  console.log("Logging from Item Modal");
  return (
    <div
      id="modal"
      onKeyDown={handleEscKeyDown}
      onClick={onClose}
      className={`modal`}
      tabIndex="-1"
    >
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
          ></button>
          <div className="modal__content-flex-img_container">
            <div>
              <img
                className="modal__content-flex-img"
                src={selectedCard.link}
              />
            </div>
            <div className="modal__content-flex-img-name">
              {selectedCard.name}
            </div>
            <div className="modal__content-flex-card-weather">
              Weather: {selectedCard.weather}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
