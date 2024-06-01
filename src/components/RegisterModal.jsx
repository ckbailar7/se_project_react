import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ onCloseModal }) => {
  return (
    <ModalWithForm title="Register" onClose={onCloseModal}>
      <div className="modalWithForm"></div>
    </ModalWithForm>
  );
};

export default RegisterModal;
