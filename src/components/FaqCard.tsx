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
  });

  return (
    <div onClick={onClickHandler}>
      <div>{question.ques}</div>
      <div className={descriptionClass}>
        {question.desc}
      </div>
    </div>
  );
};

export default FaqCard;
