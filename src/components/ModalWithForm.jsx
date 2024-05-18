import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  name,
  isOpen,
  onSubmit,
}) {
  return (
    <div id="modal" onClick={onClose} className={`modal modal_type_${name}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__content-modalWithForm"
      >
        <button
          className="modal__content-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__content-title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__content-form">
          {children}
          <button className="modal__content-submitBtn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
