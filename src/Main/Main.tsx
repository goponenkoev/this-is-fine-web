import React from 'react';
import logo from '../assets/images/logo.svg';
import {MainWrapper, ContentWrapper, Title} from './Main.style';

const Main = () => {

  return (
    <MainWrapper>
      <ContentWrapper>
        <img src={logo} className="App-logo" alt="logo"/>
        <Title>
          <p>
            This is fine to not know everything
          </p>
        </Title>
      </ContentWrapper>
    </MainWrapper>
  )
}

export default Main;