import React from "react";

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ disabled, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="block w-full rounded-md bg-gray-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
    >
      {label}
    </button>
  );
};

export default Button;
