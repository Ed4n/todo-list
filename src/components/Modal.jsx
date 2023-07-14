// para poder usar el modal, se debe importar el reactDOM
import { ReactDOM } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  return createPortal(
    <div className="modal-background">
      <div className="modal-container">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
