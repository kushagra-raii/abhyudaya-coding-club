import React from "react";
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
  return <div onClick={onClickHandler}>
    <div>
    {question.ques}
    </div>
    <div className={`${question.id === currentQuestion ? "" : "none" } `}>
        {question.desc}
    </div>
  </div>;
};

export default FaqCard;
