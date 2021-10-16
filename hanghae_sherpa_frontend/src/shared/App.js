import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import { SignupPage, LoginPage, MainPage, MyPage } from '../pages';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/main' exact component={MainPage} />
        <Route path='/mypage' exact component={MyPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
