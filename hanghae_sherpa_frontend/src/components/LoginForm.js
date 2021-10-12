import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, Grid, Input, Button } from '../elements';
import { userCreators } from '../redux/modules/user';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    if (userId === '' || password === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }

    const loginInfo = {
      userId: userId,
      password: password,
    };
    dispatch(userCreators.loginMiddleware(loginInfo));
  };

  return (
    <React.Fragment>
      <Grid>
        <Text size='20px' bold text-align='center'>
          로그인
        </Text>
        <Grid padding='16px 0px'>
          <Input
            label='아이디'
            placeholder='아이디를 입력해주세요.'
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding='16px 0px'>
          <Input
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>

        <Button
          text='로그인하기'
          _onClick={() => {
            login();
            // history.push('/mainpage');
          }}
        ></Button>

        <Text text-align='right'>
          아직 회원이 아니시라면?
          <Button
            btnName='cancle'
            text='회원가입'
            _onClick={() => {
              history.push('/signuppage');
            }}
          />
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default LoginForm;
