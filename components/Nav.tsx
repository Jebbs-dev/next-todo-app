import React from "react";
import Button from "./Button";

const Nav = () => {

  const handleClick = () => {}

  return (
    <nav className="px-12 py-5 flex justify-between items-center">
      <img src="/vercel.svg" className="h-6" alt="Logo" />
      <h2 className="text-5xl text-white">Hello,</h2>
      <span className="px-3 py-1 bg-gray-300 rounded-md">Sign in</span>
    </nav>
  );
};

export default Nav;
