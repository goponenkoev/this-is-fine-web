import React from 'react';
import {CardsWrapper} from './QuestionCards.style';
import QuestionCard from './QuestionCard/QuestionCard';

const QuestionCards = () => {

  // TODO: need to resolve a problem of html max size via scroll
  const exampleHtml = '<div>\n' +
    '    <ul>\n' +
    '        <li>Coffee</li>\n' +
    '        <li>Tea</li>\n' +
    '        <li>Milk</li>\n' +
    '    </ul>\n' +
    '    <img src="../../assets/images/logo.svg" alt="logo" width="50" height="60">\n' +
    '</div>';

  return (
    <CardsWrapper>
      <QuestionCard number={1} text={'This is question?'} plainAnswer={'This plain text'}/>
      <QuestionCard number={2} text={'This is another question?'} htmlAnswer={exampleHtml}/>
    </CardsWrapper>
  )
}

export default QuestionCards;