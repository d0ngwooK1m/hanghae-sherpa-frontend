import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';

import { Frame, MainGraph, TodoListInputForm, MainHeader } from '../components';

const MainPage = () => {
  React.useEffect(() => {});

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
