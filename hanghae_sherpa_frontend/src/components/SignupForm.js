import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';

import { Input, Button, Text, Grid } from '../elements/index';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setuserId] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  const signup = () => {
    const signupInfo = {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };

    dispatch(userCreators.signupMiddleware(signupInfo));
  };

  return (
    <React.Fragment>
      <Grid bg='blue'>
        <Grid margin='5px 0px'>
          <Input
            width='80%'
            placeholder='아이디를 입력해 주세요'
            _onChange={(e) => {
              setuserId(e.target.value);
            }}
          />
          <Button
            width='20%'
            text='중복체크'
            _onClick={() => {
              console.log(userId);
            }}
          ></Button>
        </Grid>
        <Grid margin='5px 0px'>
          <Input
            width='80%'
            placeholder='닉네임을 입력해 주세요'
            _onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <Button
            width='20%'
            text='중복체크'
            _onClick={() => {
              console.log(nickname);
            }}
          ></Button>
        </Grid>
        <Grid margin='5px 0px'>
          <Input
            placeholder='비밀번호를 입력해 주세요'
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
          />
        </Grid>
        <Grid margin='5px 0px'>
          <Input
            placeholder='비밀번호를 확인해 주세요'
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type='password'
          />
        </Grid>
        <Grid is_flex margin='5px 0px'>
          <Button
            width='175px'
            margin='0px 5px 0px 0px'
            text='회원가입'
            _onClick={() => {
              console.log(userId, password, nickname, passwordCheck);
              signup();
            }}
          ></Button>
          <Button
            width='175px'
            margin='0px 0px 0px 5px'
            text='돌아가기'
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignupForm;
