import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  linkTo: string;
  rounded: boolean;
};

const Button = ({ text, linkTo, rounded }: Props) => {
  return (
    <Link
      href={linkTo}
      className={`${
        rounded ? "rounded-full" : " rounded-xl "
      } bg-teal-600 cursor-pointer text-center text-[13px] sm:text-[16px] px-6 py-3  font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] hover:shadow-none hover:scale-95 transition-all duration-200`}
    >
      {text}
    </Link>
  );
};

export default Button;
