const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button
          className="modal__content-Item_close"
          type="button"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};

export default ItemModal;
