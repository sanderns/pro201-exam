import React from "react";
import ReactDOM from "react-dom";

export function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-70" />
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
