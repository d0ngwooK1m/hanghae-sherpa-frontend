import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';

import { Frame, MainGraph } from '../components';

const MainPage = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(graphCreators.getGraphMiddleware());
  // }, []);

  return (
    <React.Fragment>
      <Frame>
        <MainGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MainPage;
