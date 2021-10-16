import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../lib/axios';

const SET_USER = 'SET_USER';

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  nickname: 'guest',
  is_login: false,
};

const loginMiddleware = (loginInfo) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(loginInfo)
      .then((res) => {})
      .catch((err) => {});
  };
};

const signupMiddleware = (signupInfo) => {
  return () => {
    apis
      .signup(signupInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const idCheckMiddleware = (userId) => {
  return () => {
    apis
      .idCheck(userId)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

const nickCheckMiddleware = (nickname) => {
  return () => {
    apis
      .nickCheck(nickname)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  idCheckMiddleware,
  nickCheckMiddleware,
  setUser,
};

export { userCreators };
