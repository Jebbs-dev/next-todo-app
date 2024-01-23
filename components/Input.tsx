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
      className={` w-full bg-transparent text-white shadow-sm placeholder:text-gray-400
      ${
        authInput
          ? "p-4 text-lg border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
          : "relative bottom-5  border-t-0 border-b-[1px]  sm:text-sm sm:leading-6 focus:outline-nonept-72 mx-auto"
      }
      `}
    />
  );
};

export default Input;
