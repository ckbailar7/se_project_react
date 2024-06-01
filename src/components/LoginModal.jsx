import "../blocks/ItemModal.css";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ onCloseModal }) => {
  return (
    <ModalWithForm title="Login" onClose={onCloseModal}>
      <div className="modalWithForm"></div>
    </ModalWithForm>
  );
};

export default LoginModal;
