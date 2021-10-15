import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '.';

const LogoutBtn = () => {
  const history = useHistory();
  const onClickHandler = () => {
    window.location.href = '/';
  };

  return (
    <React.Fragment>
      <Button
        text='로그아웃'
        width='25%'
        _onClick={() => {
          document.cookie = `${document.cookie}; expires=${new Date(
            '1111-11-11'
          ).toUTCString()}`;

          onClickHandler();
        }}
        type='header'
      ></Button>
    </React.Fragment>
  );
};

export default LogoutBtn;
