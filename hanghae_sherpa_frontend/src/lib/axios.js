import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
  // baseURL: 'http://13.125.174.214/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  signup: (signupInfo) => instance.post('/user/signup', signupInfo),
  //메인페이지 관련 api
  getInfo: () => instance.get('/mainpage'),
};
