import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '.';

const LogoutBtn = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push('/');
  };

  return (
    <React.Fragment>
      <Button
        text='로그아웃'
        width='25%'
        _onClick={() => {
          onClickHandler();
        }}
      ></Button>
    </React.Fragment>
  );
};

export default LogoutBtn;
