import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePostPage from './pages/WritePostPage';
import ReadPostPage from './pages/ReadPostPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Shopping Mall</title>
      </Helmet>
      <Route component={MainPage} path={['/', '/shop','/shop/:category']} exact />
      <Route component={LoginPage} path='/login' />
      <Route component={RegisterPage} path='/register' />
      <Route component={WritePostPage} path='/write' />
      <Route component={ReadPostPage} path='/read' />
    </>
  )
}

export default App;