import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Main from "./Main/Main";
import {AppLayout, ContentLayout} from './App.style';
import {GlobalStyle} from './Global.style';
import Header from './Header/Header';

function App() {
  return (
    <AppLayout>
      <NavBar/>
      <ContentLayout>
        <Header/>
        <Main/>
      </ContentLayout>
      <GlobalStyle/>
    </AppLayout>
  );
}

export default App;
