import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText = "Add Garment",
  title,
  onClose,
  name,
}) {
  console.log("Logging ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h3>{title}</h3>
        <form>{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
}

export default ModalWithForm;
