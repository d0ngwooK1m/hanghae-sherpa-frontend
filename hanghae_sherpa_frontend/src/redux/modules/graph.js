import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../lib/axios';

const GET_GRAPH = 'GET_GRAPH';

const getGraph = createAction(GET_GRAPH, (data) => ({ data }));

const initialState = {
  data: [
    {
      id: 'test1',
      date: '2021-10-11',
      data: [
        {
          x: '항목1',
          y: 0,
        },
        {
          x: '항목2',
          y: 0,
        },
        {
          x: '항목3',
          y: 0,
        },
        {
          x: '항목4',
          y: 0,
        },
        {
          x: '항목5',
          y: 0,
        },
      ],
    },
    {
      id: 'test1',
      date: '2021-10-12',
      data: [
        {
          x: '항목1',
          y: 0,
        },
        {
          x: '항목2',
          y: 0,
        },
        {
          x: '항목3',
          y: 0,
        },
        {
          x: '항목4',
          y: 0,
        },
        {
          x: '항목5',
          y: 0,
        },
      ],
    },
  ],
};

const getGraphMiddleware = () => {
  return (dispatch) => {
    apis
      .getInfo()
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        dispatch(getGraph(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_GRAPH]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.data);
        draft.data = action.payload.data;
      }),
  },
  initialState
);

const graphCreators = {
  getGraphMiddleware,
};

export { graphCreators };
