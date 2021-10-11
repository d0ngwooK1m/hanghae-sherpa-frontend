// import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import React from 'react';

import SignupForm from '../components/SignupForm';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={SignupForm} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
