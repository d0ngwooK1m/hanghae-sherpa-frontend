import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

// const LOG_OUT = 'LOG_OUT';
// const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

// const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  // user: null,
  nickname: 'guest',
  is_login: false,
};

const loginMiddleware = (loginInfo) => {
  return (history) => {
    apis
      .login(loginInfo)
      .then((res) => {
        console.log(res);
        // history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const signupMiddleware = (signupInfo) => {
  return (history) => {
    apis
      .signup(signupInfo)
      .then((res) => {
        console.log(res);
        // history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
    // [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  setUser,
};

export { userCreators };
