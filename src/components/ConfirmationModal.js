import "../blocks/ModalWithForm.css";

function ConfirmationModal({ children, name = "confirmation" }) {
  return (
    <div
      id="modal"
      onClick={onClose}
      className={`modal modal_type_${name}`}
    ></div>
  );
}

export default ConfirmationModal;
