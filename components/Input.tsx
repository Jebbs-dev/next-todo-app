import React from "react";

interface InputComponents {
  placeholder?: string;
  value?: string;
  type?: string;
  name?: string;
  onChange: () => void;
}

const Input: React.FC<InputComponents> = ({
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      // name={name}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="given-name"
      className="relative pt-72 bottom-5 block w-full mx-auto bg-transparent border-t-0 border-red border-b-[1px] py-2 text-white shadow-sm placeholder:text-gray-100 sm:text-sm sm:leading-6 focus:outline-none"
    />
  );
};

export default Input;
