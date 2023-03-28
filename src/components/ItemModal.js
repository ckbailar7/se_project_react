import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleEscKeyDown }) => {
  return (
    <div onClick={onClose} className={`modal`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__content modal__content-Item-Modal"
      >
        <div onKeyDown={handleEscKeyDown} className="modal__content-flex">
          <button
            className="modal__content-Item_close "
            type="button"
            onClick={onClose}
          ></button>
          <div
            onKeyDown={handleEscKeyDown}
            className="modal__content-flex-img_container"
          >
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
