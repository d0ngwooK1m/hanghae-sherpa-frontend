// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';

import { apis } from '../lib/axios';
import { graphCreators } from '../redux/modules/graph';

import { SignupPage, LoginPage, MainPage } from '../pages';

function App() {
  // const dispatch = useDispatch();
  React.useEffect(() => {
    // apis.getInfo().then((res) => {
    //   console.log(res.data);
    // });
    // dispatch(graphCreators.getGraphMiddleware());
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/main/:page' exact component={MainPage} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
