import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '.';

const GobackBtn = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push('/main');
  };
  return (
    <React.Fragment>
      <Button
        text='메인페이지'
        width='35%'
        _onClick={() => {
          onClickHandler();
        }}
        type='header'
      ></Button>
    </React.Fragment>
  );
};

export default GobackBtn;
