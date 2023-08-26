import "../blocks/DeleteConfirmModal.css";
const DeleteConfirmModal = ({
  buttonText,
  name,
  onSubmit,
  onDelete,
  onClose,
  selectedCard,
}) =>
  // { onSelectCard }
  {
    //console.log(selectedCard, "selectedCardddd from DELETECONFIRMMODAL.JS");
    const handleDeleteSubmit = () => {
      console.log("Hello from handle delete submit function :D");
      console.log(`Your selected Card is ...`, selectedCard);
      //onDelete(selectedCard);
    };
    return (
      <div id="modal" className={"modal"}>
        <div
          className={`modal__content-delete-submit_container modal__type-delete-confirm`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className="modal__content-delete_text1">
            Are you sure you want to delete this item? This action is
            irreversible
          </p>
          <div className="modal__content-delete_buttons-container">
            <button
              onClick={onDelete(selectedCard.id)}
              className="delete__Button-one"
            >
              Yes, delete item
            </button>
            <button onClick={onClose} className="delete__Button-two">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

export default DeleteConfirmModal;
