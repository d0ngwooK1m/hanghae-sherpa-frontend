import axios from 'axios';
import { history } from '../redux/configureStore';

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
  (success) => {
    console.log(success);
    if (success.status === 200 && success.data.msg === '로그인성공') {
      let date = new Date();
      date.setTime(date.getTime() + 3 * 60 * 60 * 1000);

      document.cookie = `user=${
        success.data.token
      };expires=${date.toUTCString()};path=/`;
      // console.log(error.response.data.msg);
      history.push('/main');
      // history.replace('/main');
    }
    if (success.status === 200 && success.data.msg === '아이디중복체크완료') {
      // console.log(error.response.data.msg);
      alert('아이디 중복체크 완료');
      // history.replace('/main');
    }
    if (success.status === 200 && success.data.msg === '닉네임중복체크완료') {
      // console.log(error.response.data.msg);
      alert('닉네임 중복체크 완료');
      // history.replace('/main');
    }
    return success;
  },
  (error) => {
    // const { status, data, config } = error.response;
    // console.log(status);
    console.log(error.response);

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

    if (
      error.response.status === 400 &&
      error.response.data.errorMessage === '중복닉네임입니다.'
    ) {
      alert('중복닉네임입니다.');
      window.location.href = '/signup';
    }

    if (
      error.response.status === 400 &&
      error.response.data.errorMessage === '중복아이디입니다.'
    ) {
      alert('중복아이디입니다.');
      window.location.href = '/signup';
    }
    return error;
  }
);

export const apis = {
  //회원가입 및 로그인 관련 api
  login: (loginInfo) => instance.post('/user/login', loginInfo),
  signup: (signupInfo) => instance.post('/user/signup', signupInfo),
  idCheck: (userId) => instance.post('/user/signup/idCheck', userId),
  nickCheck: (nickname) => instance.post('/user/signup/nickCheck', nickname),
  //메인페이지 관련 api
  //getInfo 쿼리로 날짜 데이터 전송
  // getInfo: () => instance.get('/mainpage/view'),
  getInfo: (date) => instance.get(`/main/view/${date}`),
  getMypageInfo: () => instance.get('/mypage/view'),
  addInfo: (graphInfo, date) => instance.post(`/main/post/${date}`, graphInfo),
};
