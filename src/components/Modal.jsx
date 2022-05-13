import { Modal } from "react-bootstrap";
import "./Modal.css";

const Dialog = ({
  open,
  close,
  children,
  title,
  closeButton,
  ActionButton,
}) => {
  return (
    <div className="col-sm-12 " id="modalstyle">
      <Modal show={open} onHide={close}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          {ActionButton}
          {closeButton}
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};
export default Dialog;
