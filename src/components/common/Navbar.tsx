import React from "react";
import svvvLogo from "@/../public/assets/header/SVVV.svg";
import Image from "next/image";
import { navData } from "../../../public/data/navData";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-rich-blue-bg opacity-95">
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
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
