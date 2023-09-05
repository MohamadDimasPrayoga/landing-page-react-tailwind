import React, { useState } from "react";
import logo from "../assets/react.svg";
import menu from "../assets/bars-solid.svg"
import close from "../assets/xmark-solid.svg"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1100px] max-w-[550px] p-4 m-auto w-full h-full flex justify-between items-center">
        <img src={logo} className="h-[35px]" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
            <img src={toggle ? close : menu} className="h-[30px] w-[30px]"/>
        </div>
      </div>

      <div className={toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"}>
        <ul className="text-center">
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">Home</li>
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
