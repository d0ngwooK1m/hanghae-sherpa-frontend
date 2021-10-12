import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { actionCreators } from '../redux/modules/date';

const TodoListInputForm = (props) => {
  const { history } = props;
  const [value, setValue] = useState({
    date: moment().format('YYYY-MM-DD'), // 오늘 날짜로 기본 설정
    memo: '',
  });

  const { date, memo } = value;

  // 데이터 전송 함수
  const handleSubmit = (e) => {
    // if ~가 빈 경우 return;

    // 원래는 firebase에 저장하기 위한 데이터 객체..
    const todo1 = {
      ...value,
      memo,
      date: parseInt(date.split('-').join('')), // 날짜 형태 변경하여 저장.
      query: parseInt(date.slice(0, 5)),
    };
  };
  return (
    <React.Fragment>
      <form action='/action_page.php' method='get'>
        <label for='vol'>완성도</label>
        <input type='range' id='cnt' min='0' max='10' />
      </form>
    </React.Fragment>
  );
};

export default TodoListInputForm;
