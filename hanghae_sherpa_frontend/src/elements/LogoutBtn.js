import React, { useEffect } from 'react';
import { Button } from '.';

const LogoutBtn = () => {
  return (
    <React.Fragment>
      <Button
        text='로그아웃'
        width='25%'
        _onClick={() => {
          document.cookie = `${document.cookie}; expires=${new Date(
            '1111-11-11'
          ).toUTCString()}`;

          window.location.href = '/';
        }}
        type='header'
      ></Button>
    </React.Fragment>
  );
};

export default LogoutBtn;
