import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';

import { Frame, MainGraph, TodoListInputForm, MainHeader } from '../components';

const MainPage = () => {
  // const dispatch = useDispatch();
  // const _is_updated = useSelector((state) => state.graph.is_updated);
  // console.log(_is_updated);

  // React.useEffect(() => {
  //   dispatch(graphCreators.getGraphMiddleware(''));
  // }, [_is_updated]);
  return (
    <React.Fragment>
      <Frame>
        <MainHeader />
        <TodoListInputForm />
        <MainGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MainPage;
