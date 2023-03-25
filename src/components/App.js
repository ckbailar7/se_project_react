import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import "../blocks/App.css";

function App() {
  const weatherTemp = "75°F";

  return (
    <>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment">These Are the children</ModalWithForm>
      <ItemModal />
    </>
  );
}

export default App;
