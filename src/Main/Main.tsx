import React from 'react';
import {MainWrapper, ContentWrapper} from './Main.style';
import QuestionCards from "./QuestionCards/QuestionCards";

const Main = () => {

  return (
    <MainWrapper>
      <ContentWrapper>
        <QuestionCards/>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default Main;