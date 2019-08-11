import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import HomePage from './templates/HomePage';
import AdminHeader from './common/components/Headers/AdminHeader';
import AdminPage from './templates/AdminPage';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <HomePage path='/home' Component={Home}></HomePage>
          <AdminPage path='/admin' Component={Home}></AdminPage>
          <Login path='/dangnhap' Component={Login}> </Login>
          <HomePage path='/' Component={Home}></HomePage>
        </Switch>
      </Fragment>
    </BrowserRouter>

  );
}

export default App;
