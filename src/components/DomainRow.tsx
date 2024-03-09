import React from "react";
import DomainCard from "./DomainCard";

interface Domain {
    id: number;
    name: string;
    img: string;
}
interface DomainArrProps {
  domainArr: Domain[];
}

const DomainRow = ({
  domainArr,
}: DomainArrProps) => {
  return (
    <div className="flex lg:flex-row flex-col gap-5 items-center">
      {domainArr?.map((item) => {
        return <DomainCard key={item.id} domain={item} />;
      })}
    </div>
  );
};

export default DomainRow;
