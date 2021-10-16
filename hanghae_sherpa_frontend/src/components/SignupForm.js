import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';
import Swal from 'sweetalert2';

import { Input, Button, Grid, Text } from '../elements/index';

const SignupForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setuserId] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');

  const [nicknameC, setNicnameC] = React.useState(false);
  const [userIdC, setUserIdC] = React.useState(false);

  const RegExUserId = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/;
  const RegExNickname = /^[a-zA-Z0-9가-힣]{1,10}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const signup = () => {
    if (!userIdC || !nicknameC) {
      return Swal.fire({
        text: '닉네임 및 아이디 중복 체크를 해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    if (
      userId === '' ||
      password === '' ||
      nickname === '' ||
      passwordCheck === ''
    ) {
      return Swal.fire({
        text: '다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    if (
      RegExUserId.test(userId) === false ||
      RegExNickname.test(nickname) === false ||
      RegExPassword.test(password) === false
    ) {
      return Swal.fire({
        text: '잘못된 양식입니다. 다시 입력해주세요!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    const signupInfo = {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };

    Swal.fire({
      text: '회원가입 완료!',
      width: '360px',
      confirmButtonColor: '#E3344E',
    });

    dispatch(userCreators.signupMiddleware(signupInfo));
    history.push('/');
  };

  return (
    <React.Fragment>
      <Title>회원가입🌄</Title>
      <Grid margin='16px 0'>
        <Grid margin='30px 0 0 0'>
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
              console.log(typeof userId);
              dispatch(
                userCreators.idCheckMiddleware({
                  userId: userId,
                })
              );
              setUserIdC(true);
            }}
          ></Button>
        </Grid>
        {userId.length >= 4 && RegExUserId.test(userId) === false ? (
          <Text color='red' size='12px'>
            Id를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
        <Grid margin='30px 0px'>
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
              dispatch(
                userCreators.nickCheckMiddleware({
                  nickname: nickname,
                })
              );
              setNicnameC(true);
            }}
          ></Button>
        </Grid>
        {nickname.length >= 1 && RegExNickname.test(nickname) === false ? (
          <Text color='red' size='12px'>
            닉네임를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
        <Grid margin='30px 0px'>
          <Input
            placeholder='비밀번호를 입력해 주세요'
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
          />
        </Grid>
        {password.length >= 6 && RegExPassword.test(password) === false ? (
          <Text color='red' size='12px'>
            Password를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
        <Grid margin='30px 0px'>
          <Input
            placeholder='비밀번호를 확인해 주세요'
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type='password'
          />
        </Grid>
        {passwordCheck.length >= 6 &&
        RegExPassword.test(passwordCheck) === false ? (
          <Text color='red' size='12px'>
            Password를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
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
            _onClick={() => history.push('/')}
          ></Button>
        </Grid>
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

export default SignupForm;
