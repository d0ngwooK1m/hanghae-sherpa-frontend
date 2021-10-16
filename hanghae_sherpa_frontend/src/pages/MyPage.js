import React from 'react';
import { Frame, MypageGraph, MypageText, MypageHeader } from '../components';

const MyPage = () => {
  return (
    <React.Fragment>
      <Frame padding='10px 15px'>
        <MypageHeader />
        <MypageText />
        <MypageGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MyPage;
