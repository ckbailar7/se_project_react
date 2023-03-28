import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div onClick={onClose} className={`modal`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__content modal__content-Item-Modal"
      >
        <div className="modal__content-flex">
          <button
            className="modal__content-Item_close"
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
          </div>

          <div>Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
