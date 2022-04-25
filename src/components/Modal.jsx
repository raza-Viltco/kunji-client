// import React from "react";
  // import Dialog from "@mui/material/Dialog";
  // import DialogActions from "@mui/material/DialogActions";
  // import DialogContent from "@mui/material/DialogContent";
  // import DialogTitle from "@mui/material/DialogTitle";
  // import Slide from "@mui/material/Slide";

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="left" ref={ref} {...props} />;
  // });

  // const Modal = ({
  //   title,
  //   open,
  //   children,
  //   updateButton,
  //   cancelButton,
  //   onClose,
  // }) => {
  //   return (
  //     <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
  //       <DialogTitle>{title}</DialogTitle>
  //       <DialogContent>{children}</DialogContent>
  //       <DialogActions>
  //         {updateButton}
  //         {cancelButton}
  //       </DialogActions>
  //     </Dialog>
  //   );
  // };
  // export default Modal;

import { Modal } from "react-bootstrap";
import "./Modal.css"

const Modals = ({ open, close, children, title, closeButton }) => {
  return (
    <div className="col-sm-12 " id="modalstyle"  >
      <Modal show={open} onHide={close}>
        {/* <Modal.Header >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          {closeButton}
         
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};
export default Modals;
