import "../blocks/DeleteConfirmModal.css";
const DeleteConfirmModal = (buttonText, name, onSubmit) => {
  return (
    <div id="modal" className={"modal"}>
      <div
        className={`modal__content-delete-submit_container modal__type-delete-confirm`}
      >
        <p className="modal__content-delete_text1">
          Are you sure you want to delete this item? This action is irreversible
        </p>
        <button className="delete__Button-one">Yes, delete item</button>
        <button className="delete__Button-two">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
