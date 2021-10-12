import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, Grid, Input, Button } from '../elements';

const LoginForm = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    if (userId === '' || password === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }
    // dispatch(loginAction.loginDB(userId, password));
  };
  return (
    <React.Fragment>
      <Grid padding='16px' width='360px' margin='auto'>
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
          _onChange={() => {
            login();
          }}
        ></Button>

        <Text text-align='right'>
          아직 회원이 아니시라면?
          <Button
            btnName='cancle'
            text='회원가입'
            _onClick={() => history.push('/SignupForm')}
          />
        </Text>
      </Grid>
    </React.Fragment>
  );
};

export default LoginForm;
