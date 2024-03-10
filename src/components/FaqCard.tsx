import React from "react";
import cx from "classnames";
import { Dispatch, SetStateAction } from "react";
type Props = {
  question: {
    id: number;
    ques: string;
    desc: string;
  };
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
};

const FaqCard = ({ question, currentQuestion, setCurrentQuestion }: Props) => {
  const onClickHandler = () => {
    if (question.id === currentQuestion) {
      setCurrentQuestion(0);
      return;
    }
    setCurrentQuestion(question.id);
  };

  const descriptionClass = cx({
    hidden: question.id !== currentQuestion,
    "p-2": true,
    "leading-7": true,
    "mt-2": true,
  });

  return (
    <div
      onClick={onClickHandler}
      className="border-2 border-rich-blue-lightLine rounded-[55px]  md:w-[500px] lg:w-[860px] p-8 m-2 md:p-12"
    >
      <div className=" text-lg font-bold">{question.ques}</div>
      <div className={descriptionClass}>{question.desc}</div>
    </div>
  );
};

export default FaqCard;
