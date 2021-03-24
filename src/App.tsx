import "./styles.css";
import Button from "./Button";
import useModal from "./hooks/useModal";
import Modal from "./Modal";

export default function App() {
  const { openModal, closeModal, ModalPortal, modalWillClosed } = useModal();

  return (
    <div className="App">
      <ModalPortal>
        <Modal onClose={closeModal} modalWillClosed={modalWillClosed} />
      </ModalPortal>
      <h1>This is modal animation without React-spring</h1>
      <Button onClick={openModal}>Click Me!</Button>
      <div id="root-modal" />
    </div>
  );
}
