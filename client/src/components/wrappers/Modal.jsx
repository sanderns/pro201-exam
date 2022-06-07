import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./Card";

export function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-70" />
      <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
        <Card>{children}</Card>
      </div>
    </>,
    document.getElementById("portal")
  );
}
