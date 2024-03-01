import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal</button>
      {showModalPopup && (
        <Modal
          header={<h1>Custom Header</h1>}
          footer={<h1>Custom Footer</h1>}
          onClose={onClose}
          body={<div>Custom body</div>}
        />
      )}
    </div>
  );
}

// RETURN TO VIDEO AT 3:12:00
