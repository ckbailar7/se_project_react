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
        <button
          className="modal__content-Item_close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal__content-flex">
          <img className="modal__content-flex-img" src={selectedCard.link} />
          <div>{selectedCard.name}</div>
          <div>Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
