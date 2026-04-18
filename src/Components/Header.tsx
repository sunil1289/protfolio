import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import React from "react";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

const navLinks = (
  col: boolean,
  clicked: (() => void) | null,
): React.ReactNode[] => {
  const handleClick = () => {
    if (clicked) clicked();
  };
  return links.map((link, index) => (
    <a
      key={index}
      onClick={handleClick}
      className={`${col ? "flex flex-col items-center" : ""} text-primaryColor text-lg font-mono hover:text-textColor`}
      href={`#${link}`}
    >
      {link}
    </a>
  ));
};

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shadow, setShadow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  });

  return (
    <nav
      className={`relative flex ${show ? "translate-y-0" : "-translate-y-28"} ${shadow ? "shadow-[0px_10px_30px_-10px_#020c1b]" : ""} transition-transform duration-500 ease-in-out fixed w-full z-10 bg-bgColor h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}
    >
      <div className="bs:flex gap-8 hidden absolute left-1/2 -translate-x-1/2">
        {navLinks(false, null)}
      </div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks };
