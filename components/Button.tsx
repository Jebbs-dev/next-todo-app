import React, { useCallback } from "react";

interface ButtonProps {
  disabled: boolean;
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick
}) => {

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    
    onClick();

  }, [onClick, disabled]);

  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      className={`block disabled:opacity-70 disabled:cursor-not-allowed w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition bg-gray-700 border-gray-700 text-white hover:bg-gray-800 focus-visible:outline-gray-800
      `}
    >
      {label}
    </button>
  );
};

export default Button;
