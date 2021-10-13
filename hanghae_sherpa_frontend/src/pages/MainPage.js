import React from 'react';
import { Frame } from '../components';
// import styled from 'styled-components';
import TodoListForm from '../components/TodoListForm';

const MainPage = () => {
  return (
    <React.Fragment>
      <Frame>
        <TodoListForm />
      </Frame>
    </React.Fragment>
  );
};

export default MainPage;
