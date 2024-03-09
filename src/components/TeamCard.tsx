import React from "react";
import Image from "next/image";

interface Prop {
  person: { id: number; img: string; name: string; post: string };
}

const TeamCard = ({ person }: Prop) => {
  const { img, name, post } = person;
  return (
    <div className="flex flex-col items-center gap-3">
      <div className=" rounded-full bg-red-700 w-[134px] h-[134px] flex justify-center items-center">
        <div className="w-[122px] rounded-full flex justify-center items-center bg-green-600 h-[122px]">
          <Image className="w-[110px] h-[110px]" src={img} alt="" />
        </div>
      </div>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{post}</p>
    </div>
  );
};

export default TeamCard;
