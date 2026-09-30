
const Modal = ({ show, close, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <div>
        <h3>Modal</h3>

        {children}

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

