import React from 'react';
import {
  AnswerText,
  AnswerWrapper,
  CardWrapper,
  QuestionNumber,
  QuestionText,
  QuestionWrapper
} from './QuestionCard.style';

const QuestionCard = ({text, number, plainAnswer, htmlAnswer}: any) => {

  const createMarkup = (html: string) => {
    return {__html: html};
  }

  return (
    <CardWrapper>
      <QuestionWrapper>
        <QuestionNumber>{number}</QuestionNumber>
        <QuestionText>{text}</QuestionText>
      </QuestionWrapper>
      <AnswerWrapper>
        {plainAnswer && <AnswerText>{plainAnswer}</AnswerText>}
        {htmlAnswer && <AnswerText dangerouslySetInnerHTML={createMarkup(htmlAnswer)}/>}
      </AnswerWrapper>
    </CardWrapper>
  )
}

export default QuestionCard;