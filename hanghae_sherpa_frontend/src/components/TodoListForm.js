import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { Button, Grid } from '../elements';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { dateCreators as dateActions } from '../redux/modules/date';
import TodoListInputForm from './TodoListInputForm';

const TodoListForm = memo((props) => {
  const dispatch = useDispatch();

  // const current = useSelector((state) => state.date.current);

  // console.log(current);

  // const showLastList = () => {
  //   dispatch(dateActions.setCurrent(current.clone().subtract(1, 'day')));
  // };

  // const showNextList = () => {
  //   dispatch(dateActions.setCurrent(current.clone().add(1, 'day')));
  // };

  return (
    <React.Fragment>
      <Header>
        {/* <Button onClick={showLastList}>
          <BsChevronLeft />
        </Button> */}

        <Grid>
          {/* <CurrentDate>{current.format('YYYY년 MM월')}</CurrentDate> */}
          <TodoListInputForm />
        </Grid>

        {/* <Button onClick={showNextList}>
          <BsChevronRight />
        </Button> */}
      </Header>
    </React.Fragment>
  );
});

const flexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  ${({ theme }) => {
    const { device } = theme;
    return css`
      ${flexBox}
      position: relative;
      justify-content: flex-end;
      height: 280px;
      border-bottom: 2px solid;
      padding: 10px 5px;

      }
    `;
  }}
`;

const CurrentDate = styled.h3`
  ${flexBox};
`;

export default TodoListForm;
