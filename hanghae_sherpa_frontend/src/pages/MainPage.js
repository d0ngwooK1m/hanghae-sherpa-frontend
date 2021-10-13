import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { graphCreators } from '../redux/modules/graph';

import { Frame, MainGraph, TodoListForm } from '../components';

const MainPage = () => {
  return (
    <React.Fragment>
      <Frame>
        <TodoListForm />
        <MainGraph />
      </Frame>
    </React.Fragment>
  );
};

export default MainPage;
