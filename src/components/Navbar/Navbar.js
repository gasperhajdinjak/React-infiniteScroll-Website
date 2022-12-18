import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/GH-logos.jpeg";

import Links from "./Links";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='bg-white sticky top-0'>
      <div className='flex items-center font-medium justify-around'>
        <div className='z-50 p-5 flex w-full md:w-auto justify-between'>
          <img src={Logo} alt='logo' className='md:cursor-pointer h-9' />
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Roboto]'>
          <li>
            <Link to='/' className='py-7 px-3 inline-block'>
              Home
            </Link>
          </li>
          <Links />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 bottom-0 overflow-y-auto py-24 pl-4  
        duration-600 ${open ? "left-0" : "left-[-100%]"}
        `}>
          <li>
            <Link to='/' className='py-5 px-2 inline-block'>
              Home
            </Link>
          </li>
          <Links />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
