import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../lib/axios';
import moment from 'moment';

const GET_GRAPH = 'GET_GRAPH';
const GET_MYPAGE_GRAPH = 'GET_MYPAGE_GRAPH';
const ADD_GRAPH_INFO = 'GET_GRAPH_INFO';
const UPDATE_DATE = 'UPDATE_DATE';

const getGraph = createAction(GET_GRAPH, (data, date) => ({ data, date }));
const getMypageGraph = createAction(GET_MYPAGE_GRAPH, (data, num) => ({
  data,
  num,
}));
const addGraphInfo = createAction(ADD_GRAPH_INFO, (data) => ({ data }));
const updateDate = createAction(UPDATE_DATE, (date) => ({ date }));

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
  mypage_data: [
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
  ],
  date: moment().format('YYYY-MM-DD'),
  todo_num: 0,
  signup_date: moment().format('YYYY-MM-DD'),
};

const getGraphMiddleware = (date) => {
  return (dispatch) => {
    apis
      .getInfo(date)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        const dataArr = [data.yesterdayTodo, data.todo];
        const signupDate = data.signupDate;
        console.log(dataArr);
        dispatch(getGraph(dataArr, signupDate));
      })
      .catch((err) => {
        // console.log(err);
      });
  };
};

const getMypageGraphMiddleware = () => {
  return (dispatch) => {
    apis.getMypageInfo().then((res) => {
      console.log(res.data);
      const data = res.data.weekTodoArr;
      const num = res.data.weekTodoNum;
      dispatch(getMypageGraph(data, num));
    });
  };
};

const addGraphInfoMiddleware = (graphInfo, date) => {
  return (dispatch) => {
    apis
      .addInfo(graphInfo, date)
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
        draft.signup_date = action.payload.date;
      }),
    [GET_MYPAGE_GRAPH]: (state, action) =>
      produce(state, (draft) => {
        draft.mypage_data = action.payload.data;
        draft.todo_num = action.payload.num;
      }),
    [ADD_GRAPH_INFO]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft.is_updated);
        draft.is_updated = true;
        window.location.href = '/main';
      }),
    [UPDATE_DATE]: (state, action) =>
      produce(state, (draft) => {
        draft.date = action.payload.date;
      }),
  },
  initialState
);

const graphCreators = {
  getGraphMiddleware,
  getMypageGraphMiddleware,
  addGraphInfoMiddleware,
  updateDate,
};

export { graphCreators };
