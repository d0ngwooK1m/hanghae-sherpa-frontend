// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
// import { useDispatch } from 'react-redux';

// import { apis } from '../lib/axios';
// import { graphCreators } from '../redux/modules/graph';

import { SignupPage, LoginPage, MainPage, MyPage } from '../pages';
import LoadingPage from '../pages/LoadingPage';

function App() {
  // const dispatch = useDispatch();
  React.useEffect(() => {
    // apis.getInfo().then((res) => {
    //   console.log(res.data);
    // });
    // dispatch(graphCreators.getGraphMiddleware());
    // history.push('/');
  }, []);

  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/' exact component={LoginPage} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/main' exact component={MainPage} />
        <Route path='/mypage' exact component={MyPage} />
        <Route path='/loading'>
          <LoadingPage />
        </Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
