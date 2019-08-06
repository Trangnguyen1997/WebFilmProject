import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import HomePage from './templates/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomePage path='/home' Component={Home}></HomePage>
  
          <HomePage path='/' Component={Home}></HomePage>
        </Switch>
      </Fragment>
    </BrowserRouter>

  );
}

export default App;
