import { useState } from "react";
import Modal from "./modal";
import "./modal.css";
import { BsTypeH1 } from "react-icons/bs";

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
      {showModalPopup && <Modal 
      header={}
      onClose={onClose} body={<div>Custom body</div>} />}
    </div>
  );
}


// RETURN TO VIDEO AT 3:12:00