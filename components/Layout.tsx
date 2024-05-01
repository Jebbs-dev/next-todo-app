import React from "react";
import Nav from "./Nav";
import DatePicker from "./DatePicker";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <Nav />
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-80 fixed min-h-[60vh] max-h-[70vh] overflow-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-full max-w-3xl rounded-2xl px-2 py-4 flex flex-row text-center mt-3.5">
            {children}
          </div>
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default Layout;
