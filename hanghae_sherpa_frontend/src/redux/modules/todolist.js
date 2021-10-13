import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../lib/axios';

// action type
const LOAD = 'LOAD';
const ADD = 'ADD';

// action creator
const loadSherpa = createAction(LOAD, (todos) => ({ todos }));
const addSherpa = createAction(ADD, (todo) => ({ todo }));

// initialState
const initialState = {
  todoList: [],
};

// loadSherpaDB : 기존 값 불러오기
const loadMiddleware = (loadInfo) => {
  return (history) => {
    apis
      .login(loadInfo)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// AddSherpaDB : 내용 추가
const AddMiddleware = (AddInfo) => {
  return (history) => {
    apis
      .login(AddInfo)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 내용 삭제 기능 x

// reducer
export default handleActions(
  {
    [LOAD]: (state, action) => produce(state, (draft) => {}),
    [ADD]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const todolistCreators = {
  loadMiddleware,
  AddMiddleware,
  loadSherpa,
  addSherpa,
};

export { todolistCreators };
