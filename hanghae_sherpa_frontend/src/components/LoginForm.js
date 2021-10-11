import React from 'react';
import { Text, Grid, Input, Button } from '../elements';

const LoginForm = (props) => {
  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const login = () => {
    if (id === '' || pwd === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }
  };
  return (
    <React.Fragment>
      <Grid padding='16px'>
        <Text size='32px' bold>
          로그인
        </Text>
        <Grid padding='16px 0px'>
          <Input
            label='아이디'
            placeholder='아이디를 입력해주세요.'
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding='16px 0px'>
          <Input
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          text='로그인하기'
          _onChange={() => {
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default LoginForm;
