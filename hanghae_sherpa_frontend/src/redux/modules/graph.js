import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../lib/axios';

const GET_GRAPH = 'GET_GRAPH';
const ADD_GRAPH_INFO = 'GET_GRAPH_INFO';

const getGraph = createAction(GET_GRAPH, (data) => ({ data }));
const addGraphInfo = createAction(ADD_GRAPH_INFO, (data) => ({ data }));

const initialState = {
  data: [
    {
      id: 'test1',
      date: '2021-10-11',
      data: [
        {
          x: '완성도',
          y: 0,
        },
        {
          x: '창의성',
          y: 0,
        },
        {
          x: '난이도',
          y: 0,
        },
        {
          x: '집중도',
          y: 0,
        },
        {
          x: '만족도',
          y: 0,
        },
      ],
    },
    {
      id: 'test1',
      date: '2021-10-12',
      data: [
        {
          x: '완성도',
          y: 0,
        },
        {
          x: '창의성',
          y: 0,
        },
        {
          x: '난이도',
          y: 0,
        },
        {
          x: '집중도',
          y: 0,
        },
        {
          x: '만족도',
          y: 0,
        },
      ],
    },
  ],
  is_updated: false,
};

const getGraphMiddleware = (date) => {
  return (dispatch) => {
    apis
      .getInfo(date)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        const dataArr = [data.yesterdayTodo, data.todo];
        console.log(dataArr);
        dispatch(getGraph(dataArr));
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};

const addGraphInfoMiddleware = (graphInfo) => {
  return (dispatch) => {
    apis
      .addInfo(graphInfo)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        dispatch(addGraphInfo(data));
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
        if (draft.is_updated === true) {
          draft.is_updated = false;
        }
      }),
    [ADD_GRAPH_INFO]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft.is_updated);
        draft.is_updated = true;
      }),
  },
  initialState
);

const graphCreators = {
  getGraphMiddleware,
  addGraphInfoMiddleware,
};

export { graphCreators };
