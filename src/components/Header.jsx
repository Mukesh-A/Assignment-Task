import React from "react";
import Logo from "../assets/icon.png";
import Navigation from "./Navigation";
import ProfileIcon from "./ProfileIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-col w-full bg-white shadow-md">
      <div className="flex justify-between gap-5 items-center w-full border-b border-gray-200 px-8 md:px-10 py-4">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10" alt="Logo" />
          <p className="font-bold text-[#101828] text-lg">Untitled UI</p>
          <nav className="hidden md:flex justify-center items-end space-x-6">
            <Navigation />
          </nav>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ProfileIcon />
      </div>
    </header>
  );
}
