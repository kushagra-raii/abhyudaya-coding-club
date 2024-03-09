import React from "react";
import { Dispatch, SetStateAction } from "react";
type Props = {
  question: {
    id: number;
    ques: string;
    desc: string;
  };
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
};

const FaqCard = ({ question, current, setCurrent }: Props) => {
  const onClickHandler = () => {
    if (question.id === current) {
        setCurrent(0);
        return;
    }
    setCurrent(question.id);
  };
  return <div onClick={onClickHandler}>
    <div>
    {question.ques}
    </div>
    <div className={`${question.id === current ? "" : "none" } `}>
        {question.desc}
    </div>
  </div>;
};

export default FaqCard;
