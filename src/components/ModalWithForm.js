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
    <div onClick={onClose} className={`modal modal_type_${name}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__content"
      >
        <button
          className="modal__content-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__content-title">{title}</h3>
        <form className="modal__content-form">{children}</form>
        <button className="modal__content-submitBtn" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
