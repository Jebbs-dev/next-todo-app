import React from "react";

interface InputComponents {
  placeholder?: string;
  value?: string;
  type?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  authInput?: boolean;
}

const Input: React.FC<InputComponents> = ({
  placeholder,
  value,
  type,
  onChange,
  disabled,
  authInput,
}) => {
  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="given-name"
      className={`relative bottom-5 w-full bg-transparent mt-10 text-white shadow-sm placeholder:text-gray-400 border-t-0 border-b-[1px] sm:text-sm sm:leading-6 focus:outline-nonept-72 mx-auto
      `}
    />
  );
};

export default Input;
