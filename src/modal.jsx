import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
import './index.css';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  
  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <div className="modal">
      <button onClick={() => setOpenModal(true)} className="b-t-n">Modal</button>
      <span onClick={() => setOpenModal(false)}>X</span>
      {openModal && (
        <div ref={ref} className="modalContent">
          
          <div>Modal content here</div>
        </div>
      )}
    </div>
  );
};
export default Modal;
