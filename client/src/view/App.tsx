import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import './null.scss';
import './app.scss';
import './fonts.scss';

const App : React.FC = () => {

  return (
    <div className="app">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
} 

export default App 