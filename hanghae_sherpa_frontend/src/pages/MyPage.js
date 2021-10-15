import React from 'react';

import { Frame, MypageGraph } from '../components';
import MypageHeader from '../components/MypageHeader';

const MyPage = () => {
  return (
    <React.Fragment>
      <Frame padding='10px 15px'>
        <MypageHeader />
        <MypageGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MyPage;
