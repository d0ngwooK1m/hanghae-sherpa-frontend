import axios from 'axios';
import { history } from '../redux/configureStore';

// axios.defaults.withCredentials = true;

const instance = axios.create({
  // baseURL: 'http://localhost:4000/',
  baseURL: 'http://13.125.174.214/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
    // Authorization: `Bearer ${document.cookie}`,
  },
  withCredentials: true,
  // credentials: 'include',
});

instance.interceptors.request.use(
  (config) => {
    const cookie = document.cookie;
    if (cookie === '') {
      return config;
    }
    const cookieSplit = cookie.split('=')[1];
    console.log(cookieSplit);

    config.headers = {
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json',
      Authorization: `Bearer ${cookieSplit}`,
    };
    return config;
  },
  (err) => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // const { status, data, config } = error.response;
    // console.log(status);
    console.log(error.response.status);

    if (error.response.status === 401) {
      console.log('asdfasdf');
      history.push('/');
    }
    return error;
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  signup: (signupInfo) => instance.post('/user/signup', signupInfo),
  //메인페이지 관련 api
  //getInfo 쿼리로 날짜 데이터 전송
  // getInfo: () => instance.get('/mainpage/view'),
  getInfo: (date) => instance.get(`/main/view/${date}`),
  addInfo: (graphInfo) => instance.post('/main/post', graphInfo),
};
