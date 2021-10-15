import axios from 'axios';
import { history } from '../redux/configureStore';
import { useDispatch } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Spinner } from '../components';

// axios.defaults.withCredentials = true;
// const [loading, setLoading] = useState(null);

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

// useEffect(() => {
//   const load = async () => {
//     try {
//       setLoading(true);

//       await instance.post('/', load).then((res) => {
//         console.log();
//       });
//     } catch (e) {
//       // 에러 처리
//     }

//     setLoading(false);
//   };

//   load();
// }, []);

// 로딩 시 Spinner 띄움
// if (loading) return <Spinner />;

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
      // console.log('asdfasdf');
      history.push('/');
    }

    // 데이터가 둘 다 없는 경우
    if (
      error.response.status === 400 &&
      error.response.data.msg === '데이터가 없습니다.'
    ) {
      // console.log(error.response.data.msg);
      alert('저장된 데이터가 없습니다.');
      // history.replace('/main');
      window.location.href = '/main';
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
  getMypageInfo: () => instance.get('/mypage/view'),
  addInfo: (graphInfo, date) => instance.post(`/main/post/${date}`, graphInfo),
};
