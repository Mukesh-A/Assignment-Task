import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navigation = () => {
  const navItems = [
    { label: "Home", hasDropdown: false },
    { label: "Products", hasDropdown: true },
    { label: "Resources", hasDropdown: true },
    { label: "Pricing", hasDropdown: false },
  ];

  return (
    <nav className="flex gap-8 items-center self-stretch my-auto text-base font-semibold whitespace-nowrap min-w-[240px] text-slate-600">
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col justify-center items-center self-stretch  ${
            item.hasDropdown ? "py-1" : ""
          } my-auto`}
        >
          <div className="flex overflow-hidden gap-2 justify-center items-center ">
            <div className="self-stretch my-auto">{item.label}</div>
            {item.hasDropdown && <MdKeyboardArrowDown />}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
