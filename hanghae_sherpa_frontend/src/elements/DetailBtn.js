import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '.';

const DetailBtn = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push('/mypage');
  };

  return (
    <React.Fragment>
      <Button
        text='마이페이지'
        width='35%'
        height='45px'
        _onClick={() => {
          onClickHandler();
        }}
      ></Button>
    </React.Fragment>
  );
};

export default DetailBtn;
