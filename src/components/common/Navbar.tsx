"use client";

import React, { useState } from "react";
import svvvLogo from "@/../public/assets/header/SVVV.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleModel = () => {
    setNavOpen(!navOpen)
  }
  return (
    <nav className="sm:bg-rich-blue-bg bg-[#111644ee] fixed sm:static w-full z-20 sm:opacity-95  ">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="py-2">
          <Image src={svvvLogo} className="" alt="Logo" height={80} />
        </div>
        <div className="text-white hidden sm:flex">
          {navData?.map((item, idx) => (
            <Link
              href={item?.path}
              key={idx}
              className="px-4 py-8 text-[#EEE] hover:text-[#fff] hover:bg-[#080D51] text-nowrap"
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div className=" sm:invisible relative">
          <button onClick={toggleModel}>
            {!navOpen && <FiAlignJustify color="white" size={35} />}
            {navOpen && <FaTimes color="#ddd" size={35}/>}  
          </button>
          {
            navOpen && <div className="absolute  right-4 flex flex-col" >
            {navData?.map((item, idx) => (
              <Link
                href={item?.path}
                key={idx}
                className="px-5 py-1 border-b bg-[#0f1437b0] text-[#eee]  hover:text-[#fff]  text-nowrap"
              >
                {item?.title}
              </Link>
            ))}
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
