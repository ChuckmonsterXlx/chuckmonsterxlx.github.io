"use client";

import { useState } from "react";
import Link from "next/link";
import { ThreeBarsIcon, XIcon } from "@primer/octicons-react";

const navItems = [
  { path: "", label: "Home" },
  // { path: "about", label: "About" },
  // { path: "my-skills", label: "My Skills" },
  // { path: "work", label: "Work" },
  // { path: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-5 py-3 text-white shadow-md bg-blue-950">
        <div className="flex items-center gap-2">
          <Link href={"/"}>
            <div className="text-xl font-bold cursor-pointer">Chuckmonster</div>
          </Link>
        </div>

        <div className="hidden gap-10 md:flex">
          {navItems.map((navItem) => (
            <Link
              className="px-5 py-2 font-semibold transition duration-300 rounded-sm hover:bg-blue-900"
              key={navItem.path}
              href={`#${navItem.path}`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? <XIcon size={24} /> : <ThreeBarsIcon size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full py-5 shadow-lg bg-blue-950 md:hidden top-11">
          {navItems.map((navItem) => (
            <Link
              className="w-full px-5 py-2 font-semibold text-center text-white transition duration-300 rounded-sm hover:bg-blue-900"
              key={navItem.path}
              href={`#${navItem.path}`}
              onClick={toggleMenu}
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
