import React from "react";
import Image from "next/image";

interface FacultyCardProp {
  person: { id: number; img: string; name: string; post: string };
}

const FacultyCard = ({ person }: FacultyCardProp) => {
  const { img, name, post } = person;
  return (
    <div className="flex flex-col gap-3">
      <Image src={img} alt="" />
      <h2 className=" text-2xl font-semibold">{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default FacultyCard;
