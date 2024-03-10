import React from "react";
import Image from "next/image";
import cx from "classnames";
import { turret } from "@/app/(pages)/page";

interface FacultyCardProp {
  person: { id: number; img: string; name: string; post: string };
  isTopMgmt: boolean;
}




const FacultyCard = ({ person,isTopMgmt }: FacultyCardProp) => {
  const { img, name, post } = person;
  const imgClass = cx({
    "mb-2":true,
    "min-w-80":isTopMgmt,
  })
  


  return (
    <div className="flex flex-col items-center w-54 xl:w-64 gap-1">
      <div>
      <Image src={img} className={imgClass} alt="" />
      </div>
      <h2 className={` ${turret.className} text-2xl font-semibold`}>{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default FacultyCard;
