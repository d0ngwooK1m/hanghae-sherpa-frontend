import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../lib/axios';
import { dispatch } from 'd3-dispatch';

// action type
const LOAD = 'LOAD';
const ADD = 'ADD';

// action creator
const loadSherpa = createAction(LOAD, (todos) => ({ todos }));
const addSherpa = createAction(ADD, (todo) => ({ todo }));

// initialState
const initialState = {
  todoList: [
    {
      id: '',
      date: 'yyyy-MM-dd',
      todolist: [
        {
          perpeftion: '',
          creativity: '',
          difficulty: '',
          concentration: '',
          satisfaction: '',
        },
      ],
    },
  ],
};

// loadSherpaDB : 기존 값 불러오기
const loadMiddleware = (loadInfo) => {
  return (history) => {
    apis
      .login(loadInfo)
      .then((res) => {
        console.log(res.todoList);
        const todoList = res.todoList;
        const todoListArr = [todoList.thesedayTodo, todoList.todo];
        dispatch(loadSherpa(todoListArr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// AddSherpaDB : 내용 추가
const AddMiddleware = (addInfo) => {
  return (history) => {
    apis
      .login(addInfo)
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
    [LOAD]: (state, action) =>
      produce(state, (draft) => {
        console.log(state);
      }),
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        console.log(state);
      }),
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
