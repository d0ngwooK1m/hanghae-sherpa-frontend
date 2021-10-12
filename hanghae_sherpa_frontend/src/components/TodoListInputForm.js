import React, { useState } from 'react';
import styled from 'styled-components';
import { InputRange } from '/elements';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/modules/date';
import moment from 'moment';

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
      <Form>
        <label>완성도</label>
        <InputRange />
      </Form>
      <Form>
        <label>창의성</label>
        <InputRange />
      </Form>
      <Form>
        <label>난이도</label>
        <InputRange />
      </Form>
      <Form>
        <label>집중도</label>
        <InputRange />
      </Form>
      <Form>
        <label>만족도</label>
        <InputRange />
      </Form>
    </React.Fragment>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export default TodoListInputForm;
