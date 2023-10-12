// import "../styles/SignUp.css"
import React, {ReactNode} from 'react'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SignUp({ isOpen, onClose, children }: ModalProps) {
  console.log(children);
  
  if (!isOpen) return null;

  return (
    <div className="modal-overlayy" onClick={onClose}>
      <div className="modal-contentt" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
    )
}

export default SignUp
