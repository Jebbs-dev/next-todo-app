import React from "react";

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  label: string;
  authWidth: boolean;
  authEffect: boolean;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  onClick,
  label,
  authWidth,
  authEffect,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`block disabled:opacity-70 disabled:cursor-not-allowed w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition
      ${
        authWidth
          ? "w-full bg-white text-black border-black"
          : "w-fit bg-gray-700 border-gray-700 text-white"
      }
      ${authEffect ? "" : "hover:bg-gray-800 focus-visible:outline-gray-800"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
