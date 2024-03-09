import React from "react";
import Image from "next/image";
import { turret } from "@/app/(pages)/page";

interface FacultyCardProp {
  person: { id: number; img: string; name: string; post: string };
  isTopMgmt: boolean;
}

const FacultyCard = ({ person,isTopMgmt }: FacultyCardProp) => {
  const { img, name, post } = person;
  return (
    <div className="flex flex-col items-center w-54 xl:w-64 gap-1">
      <div className="">
      <Image src={img} className="mb-2 " alt="" />
      </div>
      <h2 className={` ${turret.className} text-2xl font-semibold`}>{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default FacultyCard;
