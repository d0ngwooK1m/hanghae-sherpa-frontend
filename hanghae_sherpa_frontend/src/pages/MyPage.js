import React from 'react';

import { Frame, MypageGraph, MypageText } from '../components';

const MyPage = () => {
  return (
    <React.Fragment>
      <Frame>
        <MypageText />
        <MypageGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MyPage;
