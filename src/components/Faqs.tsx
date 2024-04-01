"use client";

import React, { useState } from "react";
import { faqs } from "../../public/data/faqs";
import FaqCard from "./FaqCard";

const Faqs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="flex flex-col gap-y-2 md:gap-4 px-4">
      {faqs?.map((item) => (
        <FaqCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          key={item.id}
          question={item}
        />
      ))}
    </div>
  );
};

export default Faqs;
