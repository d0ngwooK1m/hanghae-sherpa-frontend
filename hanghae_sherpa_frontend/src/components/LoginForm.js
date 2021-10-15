import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Text, Grid, Input, Button } from '../elements';
import { userCreators } from '../redux/modules/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  const RegExUserId = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const login = () => {
    setSubmit(true);

    if (userId === '' || password === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }

    console.log(RegExUserId.test(userId));
    console.log(RegExUserId.test(password));

    if (
      RegExUserId.test(userId) === false ||
      RegExPassword.test(password) === false
    ) {
      // console.log(RegExUserId.test(userId));
      // console.log(RegExUserId.test(password));
      return;
    }
    const loginInfo = {
      userId: userId,
      password: password,
    };
    console.log(loginInfo);
    dispatch(userCreators.loginMiddleware(loginInfo));
    // history.push('/main');
  };

  return (
    <React.Fragment>
      <Grid>
        <Title size='20px' bold text-align='center'>
          로그인
        </Title>
        <Grid padding='16px 0px'>
          <Input
            label='아이디'
            placeholder='아이디를 입력해주세요.'
            _onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Grid>
        {submit && RegExUserId.test(userId) === false ? (
          <Text color='red' size='12px'>
            Id를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}

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
        {submit && RegExPassword.test(password) === false ? (
          <Text color='red' size='12px'>
            Password를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}

        <Button
          text='로그인하기'
          _onClick={() => {
            login();
          }}
        ></Button>

        <Text text-align='right'>
          아직 회원이 아니시라면?
          <Button
            btnName='cancle'
            text='회원가입'
            _onClick={() => {
              history.push('/signup');
            }}
          />
        </Text>
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.div`
  width: 40%;
  font-size: 20px;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
`;

export default LoginForm;
