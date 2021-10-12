import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Button, Grid } from './elements';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { actionCreators as dateActions } from '../redux/modules/date';
import TodoListInputForm from './TodoListInputForm';

const TodoList = memo((props) => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.date.current);

  const showLastList = () => {
    dispatch(dateActions.setCurrent(current.clone().subtract(1, 'day')));
  };

  const showNextList = () => {
    dispatch(dateActions.setCurrent(current.clone().add(1, 'day')));
  };

  return (
    <React.Fragment>
      <Header>
        <Button onClick={showLastList}>
          <BsChevronLeft />
        </Button>

        <Grid>
          <CurrentDate>{current.format('YYYY년 MM월')}</CurrentDate>
          <TodoListInputForm />
        </Grid>

        <Button onClick={showNextList}>
          <BsChevronRight />
        </Button>
      </Header>
    </React.Fragment>
  );
});

const flexBox = styled.css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  ${({ theme }) => {
    const { device, colors } = theme;
    return css`
      ${flexBox}
      position: relative;
      justify-content: flex-end;
      height: 50px;
      border-bottom: 2px solid ${colors.basicBorder};

      ${device.tablet} {
        height: 60px;
        padding: 0 20px;
      }
    `;
  }}
`;

const CurrentDate = styled.h3`
  ${flexBox};
`;

export default TodoList;
