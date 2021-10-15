import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { userCreators } from '../redux/modules/user';

import { Input, Button, Grid, Text } from '../elements/index';

const SignupForm = () => {
  const history = useHistory();
  // const { history } = props;
  const dispatch = useDispatch();
  const [userId, setuserId] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');
  const [submit, setSubmit] = React.useState(false);

  const RegExUserId = /^[a-zA-Z0-9!@#$%^&*]{4,12}$/;
  const RegExNickname = /^[a-zA-Z0-9가-힣]{1,10}$/;
  const RegExPassword = /^[a-zA-Z0-9!@#$%^&*]{6,18}$/;

  const signup = () => {
    setSubmit(true);

    if (
      userId === '' ||
      password === '' ||
      nickname === '' ||
      passwordCheck === ''
    ) {
      return alert('다시 입력해주세요!');
    }

    if (
      RegExUserId.test(userId) === false ||
      RegExNickname.test(userId) === false ||
      RegExPassword.test(userId) === false
    ) {
      return;
    }

    const signupInfo = {
      userId: userId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };

    dispatch(userCreators.signupMiddleware(signupInfo));
    history.push('/');
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid margin='100px 0px 0px 0px'>
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
            }}
          ></Button>
        </Grid>
        {submit && RegExUserId.test(userId) === false ? (
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
              // console.log(nickname);
              dispatch(
                userCreators.nickCheckMiddleware({
                  nickname: nickname,
                })
              );
            }}
          ></Button>
        </Grid>
        {submit && RegExNickname.test(nickname) === false ? (
          <Text color='red' size='12px'>
            닉네임를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
        <Grid margin='5px 0px' margin='30px 0px'>
          <Input
            placeholder='비밀번호를 입력해 주세요'
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
            type='password'
          />
        </Grid>
        {submit && RegExPassword.test(password) === false ? (
          <Text color='red' size='12px'>
            Password를 다시 입력해주세요
          </Text>
        ) : (
          ''
        )}
        <Grid margin='5px 0px' margin='30px 0px'>
          <Input
            placeholder='비밀번호를 확인해 주세요'
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            type='password'
          />
        </Grid>
        {submit && RegExPassword.test(passwordCheck) === false ? (
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

export default SignupForm;
