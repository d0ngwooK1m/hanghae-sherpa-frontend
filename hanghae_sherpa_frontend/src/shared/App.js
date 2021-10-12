// import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import React from 'react';
import { apis } from '../lib/axios';

// import SignupForm from '../components/SignupForm';
import { MainPage, SignupPage } from '../pages';
import LoginForm from '../components/LoginForm';

function App() {
  // React.useEffect(() => {
  //   apis.test().then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginForm} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/mainpage' exact component={MainPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
