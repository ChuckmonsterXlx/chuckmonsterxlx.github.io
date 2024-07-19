"use client";

import { useState } from "react";
import Link from "next/link";
import { ThreeBarsIcon, XIcon } from "@primer/octicons-react";

const navItems = [
  { path: "about", label: "About" },
  { path: "my-skills", label: "My Skills" },
  { path: "work", label: "Work" },
  { path: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-5 py-3 rounded bg-blue-950">
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <Link href={"/"}>
              <div>Chuckmonster</div>
            </Link>
          </div>
        </div>

        <div className="hidden gap-10 md:flex">
          {navItems.map((navItem) => (
            <Link
              className="px-5 py-2 rounded-sm hover:bg-blue-900"
              key={navItem.path}
              href={`#${navItem.path}`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>

        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? <XIcon /> : <ThreeBarsIcon />}
        </button>
      </nav>
      {isOpen && (
        <div className="absolute flex flex-col items-center rounded-sm bg-blue-950 md:hidden right-3 top-9">
          {navItems.map((navItem) => (
            <Link
              className="w-full px-5 py-2 rounded-sm hover:bg-blue-900"
              key={navItem.path}
              href={`#${navItem.path}`}
            >
              {navItem.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
