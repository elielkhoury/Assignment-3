interface ModalProps {
  modalOpen: boolean; // Determines if the modal is open or closed
  setModalOpen: (open: boolean) => boolean | void; // Function to update the modal's open state
  children: React.ReactNode; // The content to be displayed inside the modal
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <label
          onClick={() => setModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕{" "}
        </label>
        {children}{" "}
      </div>
    </div>
  );
};

export default Modal;
