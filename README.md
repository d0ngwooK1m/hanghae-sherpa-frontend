<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbkHzp7%2FbtrhTSkFWHl%2FGSfYQx3P6AQ6IOUN9eKBtk%2Fimg.jpg'>

<!-- # 항해 미니프로젝트2(셰르파)🏔 -->

# 목차

1. [개요](#개요)

2. [공통](#공통)

3. [WIL](#WIL)

4. [와이어프레임](#와이어프레임)

5. [기능정보](#기능정보)

6. [진행과정](#진행과정)

# 개요

다른 사람과의 비교는 필요 없다! 오로지 과거의 나와 비교해서 내가 얼마나 성장했는지, 목표치를 잘 유지하는지를 산 모양의 그래프로 볼 수 있는 항해라는 산의 등산 도우미, 셰르파를 소개합니다.

## 기간 / 인원

```
- Front-end(김동우, 안정우)
- Back-end(황창환, 박재현)
- 20211011 ~ 20211016(6일간)
```

# 공통

1. 로그인 회원가입
2. 데이터베이스 그래프화

## 프론트엔드

그래프 라이브러리 nivo사용

김동우: 회원가입 페이지, 메인페이지 그래프, Text, Input, API통신, 유효성 검사

안정우: 로그인 페이지, 메인페이지 작성 파트, Grid, Btn, 헤더 컴포넌트

## 백엔드

실시간 통신 웹소켓 지양

database: mysql (sequelize)

# WIL

## 우리팀이 해결한 문제 정리하기

1. 인풋레인지에 저장한 그래프의 값 쌓이게 하기  
   useEffect를 이용해 데이터가 업데이트 될 때, input의 value가 데이터에서 추출한 값으로 설정되게 한다.

2. 그래프가 쌓이는 그래프로 나왔는데, 어떻게 해결 하였는가?  
   그래프를 2개 그리고, 한 그래프 스케일을 없애고 그래프 모양만 나오도록 한 뒤, z-index와 position을 활용해 두개의 그래프를 겹쳐 한 화면에 나오는 것 처럼 하였다.

3. 에러 핸들링은 어떻게 하였는가?  
   axios interceptor를 통해 response를 가로채 status코드와 메세지의 조합으로 다른 응답이 나가도록 하였다.

4. 사용자 관점과 보안 이슈  
   보안 상의 이유로 아예 아이디, 비밀번호의 요소에 대해 사용자에게 알려주지 않았는데, '아이디 혹은 비밀번호가 틀렸습니다.'라는 코멘트는 나의 경험 상 아이디나 비밀번호 중 무엇이 틀렸는지 정확히 알려줘서 사용성이 좋았다. 앞으로는 일치하지 않는 요소를 구분하여 에러메시지를 띄우는 것이 좋을 것 같다.

5. 반응형 컴포넌트 고려  
   어려웠지만 이번 프로젝트보다는 비교적 쉬웠던 이전 프로젝트들에서는 %나 vh 값을 주로 이용했다. 하지만 이번프로젝트에서는 원하는 디자인, 기능을 구현하기 위해서 그때그때마다 px값을 주는 경우가 대부분이였다. 후에 페이지를 오갈때 사용성이 좋지 않아 앞으로는 반응형 컴포넌트를 고려하면서 width, height, px 값을 주는 것을 줄이면 좋을 것 같다.

# 와이어 프레임

![셰르파로그인](/readmeImg/셰르파로그인.png)

![셰르파회원가입](/readmeImg/셰르파회원가입.png)

![셰르파메인](/readmeImg/셰르파메인.png)

![셰르파마이](/readmeImg/셰르파마이.png)

# 진행과정

## API

![API최종1](/readmeImg/API최종1.PNG)
![API최종2](/readmeImg/API최종2.PNG)
![API최종3](/readmeImg/API최종3.PNG)

## DB diagram

![DB최종](/readmeImg/DB최종.png)

## 1. 컴포넌트 만들기

와이어 프레임을 통해 4개의 페이지와 그에 따른 컴포넌트, 엘리먼트들을 만들었다.  
작성 순서는

1. App.js에서 Route로 빈 페이지들 연결
2. 페이지에서 빈 컴포넌트들 연결
3. 엘리먼트 작성
4. 컴포넌트 채우기
5. 페이지 채우기

순서로 진행하였다.

## 2. 로그인 회원가입 페이지 뷰 작성 및 통신 시작

![사진1](/readmeImg/view1.png)

1번 방법으로 우선 로그인 및 회원가입 페이지를 만들고 input 데이터를 onChange와 setState를 통해 받고 axios를 통해 백엔드에 disapatch 하는 형식으로 통신을 시도하였다.  
로그인 시에는 200 status 코드와 jwt 토큰을 발급해주고, 이 토큰을 document.cookie를 이용해 저장해주는 방식을 사용했다.

```javascript
//user.js
const loginMiddleware = (loginInfo) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(loginInfo)
      .then((res) => {
        //interceptor
      })
      .catch((err) => {
        //interceptor
      });
  };
};

//axios.js response
instance.interceptors.response.use((success) => {
  console.log(success);
  if (success.status === 200 && success.data.msg === '로그인성공') {
    let date = new Date();
    date.setTime(date.getTime() + 3 * 60 * 60 * 1000);

    document.cookie = `user=${
      success.data.token
    };expires=${date.toUTCString()};path=/`;
    history.push('/main');
  }
  //이하 생략
});
```

그리고 로그인이 안 된 상태에서 메인 또는 마이페이지 접근을 방지하기 위해서 정보 전송 시 axios interceptor를 통해서 require시 헤더 정보에 Authentication 항목을 넣어주어서 백엔드에서 체크시 이 항목이 없다면 401에러가 뜨도록 처리했다.

```javascript
//axios.js
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
```

반대로 로그인 완료 시 로그인 및 회원가입 화면으로 돌아가는 것 또한 사용성이 좋지 않다는 피드백을 받고 Ridirect태그를 통해 메인페이지로 재접속 할 수 있도록 해주었다.

```javascript
import React from 'react';
import { Frame, LoginForm } from '../components';
import { Redirect } from 'react-router';

const LoginPage = () => {
  const cookie = document.cookie;

  if (cookie !== '') {
    return <Redirect to='/main' />;
  }

  return (
    <React.Fragment>
      <Frame>
        <LoginForm />
      </Frame>
    </React.Fragment>
  );
};

export default LoginPage;
```

## 3. 메인페이지 뷰 작성 및 통신 시작

![사진2](/readmeImg/view2.PNG)

뷰를 nivo 그래프 라이브러리를 통해 작성하고 로컬 json 서버를 통해 정보가 잘 들어오는 지 확인 후, input date에 onChange와 axios 통신을 useEffect에 담아 날짜가 변경될 때 마다 응답으로 200 status 코드와 그 날짜와 전날의 그래프 데이터를 가져올 수 있도록 하였다.

```javascript
//graph.js
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
        //interceptor
      });
  };
};
```

## 4. 마이페이지 뷰 작성 및 통신 시작

![사진3](/readmeImg/view3.PNG)

현재 날짜를 axios, dispatch로 useEffect에 담아 렌더링 시 작동하게 하면, 현재 날짜에서 일주일 간의 데이터 베이스를 200 status 코드, 갯수와 함께 준다. 데이터 베이스를 통해 stack line 형태의 그래프를 nivo 라이브러리를 통해 그려주게 되고, 갯수를 통해 멘트를 배열에서 골라 보여주게 된다.

```javascript
//graph.js
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
```

## 5. 디자인

![사진4](/readmeImg/view4.png)

www.awwwards.com에서 디자인 컨셉(https://www.essentialgourmet.com.au/)을 정한 후 컴포넌트의 색과 효과를 주었다.

## 6. 로그인 및 회원가입 유효성 검사

![사진5](/readmeImg/view5.png)

정규표현식과 if문, 조건 렌더링을 통해 프론트와 백엔드 양쪽에서 유효성 검사를 할 수 있도록 하였다.

```javascript
//LoginForm.js
const RegExUserId = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/;
const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

const login = () => {
  if (userId === '' || password === '') {
    return Swal.fire({
      text: '아이디 혹은 비밀번호가 공란입니다! 입력해주세요!',
      width: '360px',
      confirmButtonColor: '#E3344E',
    });
  }

  console.log(RegExUserId.test(userId));
  console.log(RegExUserId.test(password));

  if (
    RegExUserId.test(userId) === false ||
    RegExPassword.test(password) === false
  ) {
    return Swal.fire({
      text: '아이디 혹은 비밀번호가 양식에 맞지 않습니다!',
      width: '360px',
      confirmButtonColor: '#E3344E',
    });
  }
  const loginInfo = {
    userId: userId,
    password: password,
  };
  console.log(loginInfo);
  dispatch(userCreators.loginMiddleware(loginInfo));
};
```

## 7. 최종 배포

![움짤1](/readmeImg/view6.gif)

중간중간 배포했던 빌드파일을 지우고 최종 빌드 파일과 aws s3 정적 웹사이트 배포를 통해 백엔드와 통신이 잘 되는지 최종적으로 점검하였다.

# 느낀 점

이번주는 어쩌다 보니 이런 순서로 일을 진행했지만, 앞으로는 이런 방식으로 작업하는 걸 습관화 해서 숙련도를 올려야겠다는 생각을 했다. 그리고 중간에 axios interceptor를 구현해서 response가 좀 뒤죽박죽이다... 앞으로는 특별한 경우를 제외하고 인터셉터로 통합 처리하는 것도 나쁘지 않다고 생각한다.

첫 협업 때 좋았던 점:
내 아이디어가 협업으로 구현되는 모습을 직접 볼 수 있어서 좋았다.  
또한 nivo라는 라이브러리를 통해서 받은 데이터를 잘 구현할 수 있어서 좋았다.  
파이어 베이스가 아닌 axios로 백엔드 서버와 소통하는 방법을 알아서 좋았다. 그리고 배포는 각자 서버에 하고, 프론트 서버에서 요청하고, 백엔드 서버에서 처리해 응답을 내려주는 방식으로 작동한다는 것도 알았다.  
정리하자면 기본적으로 aws s3로 정적 웹사이트를 만들면 axios나 파이어베이스로 백엔드(DB)와 소통을 잘 하여 프론트 뷰를 생각대로 잘 굴러가게 하는 것(CRUD 등)이 프론트엔드가 하는 일이라고 볼 수 있다.

첫 협업 떄 아쉬웠던 점:
라이브러리 커스터마이징과 추가 기능구현이 아쉬웠다.  
달력 input창과 range타입 input창을 활용헀는데, 처음엔 라이브러리를 활용해 하려다 달력 같은 경우에는 onChange에서 날짜 이동하는 방법을 제대로 찾지 못해 활용하지 못해서 아쉬웠고, range는 적당한 라이브러리를 찾지 못해 아쉬웠다. 앞으로 라이브러리를 활용할 때는 사용법 및 커스텀 방법을 문서를 통해 숙지하고 사용할지 말지를 결정하도록 해야겠다.  
마이페이지에서 얼마나 잘 진행하고 있는지에 대한 멘트를 보여주도록 했는데, 시간 부족으로 인해 백엔드에서 내려준 한 일의 갯수에 따라 코멘트 배열에서 코멘트를 보여주는 것으로 했다. 좀 더 시간과 여유가 있었다면 랜덤 코멘트와 이모지를 가져오는 쪽으로 구현해봤어도 좋았을 듯하다.
