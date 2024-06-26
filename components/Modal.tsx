import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel?: string;
  disabled?: boolean;
}

const handleSubmit = () => {};



const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
}) => {

  const handleClose = useCallback(() => {
    onClose();
  }, [ onClose]);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
      <div className="relative w-4 lg:w-3/6 my-6 mx-auto lg:max-w-md h-full lg:h-auto">
        {/* Content */}
        <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-center justify-center p-10 rounded-t">
            <h3 className="text-3xl font-semibold text-white">{title}</h3>
          </div>
          {/* Body */}
          <div className="relative px-10 pb-10 flex-auto" onClick={handleClose}>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
