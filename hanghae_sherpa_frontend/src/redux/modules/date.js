import { createAction, handleActions } from 'redux-actions';
import moment from 'moment';
import produce from 'immer';

// action type
const SET_NOW = 'date/SET_NOW';
const SET_CURRENT = 'date/SET_CURRENT';

// action creators
const setNow = createAction(SET_NOW, () => ({ now: moment() }));
const setCurrent = createAction(SET_CURRENT, (date) => ({ date }));

// initialState
const initialState = {
  now: moment(),
  current: moment(),
};

// reducer
export default handleActions(
  {
    [SET_NOW]: (state, action) =>
      produce(state, (draft) => {
        draft.now = action.payload.now;
      }),

    [SET_CURRENT]: (state, action) =>
      produce(state, (draft) => {
        draft.current = action.payload.date;
      }),
  },
  initialState
);

export const dateCreators = {
  setCurrent,
  setNow,
};
