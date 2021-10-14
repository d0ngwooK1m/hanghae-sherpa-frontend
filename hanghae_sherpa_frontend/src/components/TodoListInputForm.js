import React, { useState } from 'react';
import styled from 'styled-components';
import { InputRange, Button, InputDate } from '../elements';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { todolistCreators } from '../redux/modules/todolist';
import moment from 'moment';

const TodoListInputForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    // date: moment().format('YYYY-MM-DD'),
    // 오늘 날짜로 기본 설정
    perpection: '',
    creativity: '',
    difficulty: '',
    concentration: '',
    satisfaction: '',
  });

  const {
    // date,
    perpection,
    creativity,
    difficulty,
    concentration,
    satisfaction,
  } = value;

  // 데이터 전송 함수
  const handleSubmit = (e) => {
    // 원래는 firebase에 저장하기 위한 데이터 객체..
    const AddInfo = {
      ...value,
      // date: parseInt(date.split('-').join('')), // 날짜 형태 변경하여 저장.
      // query: parseInt(date.slice(0, 5)),
      perpection,
      creativity,
      difficulty,
      concentration,
      satisfaction,
    };

    if (AddInfo.perpection === '') {
      AddInfo.perpection = 0;
    }
    console.log(AddInfo.perpection);
    // dispatch(todolistCreators.AddMiddleware(AddInfo));
    // history.replace('/mainpage');
  };
  return (
    <React.Fragment>
      <InputDate></InputDate>
      <Form>
        <label>완성도</label>
        <InputRange
          id='perpection'
          value={perpection}
          _onChange={(e) => setValue({ ...value, perpection: e.target.value })}
        />
      </Form>
      <Form>
        <label>창의성</label>
        <InputRange
          id='creativity'
          value={creativity}
          _onChange={(e) => setValue({ ...value, creativity: e.target.value })}
        />
      </Form>
      <Form>
        <label>난이도</label>
        <InputRange
          id='difficulty'
          value={difficulty}
          _onChange={(e) => setValue({ ...value, difficulty: e.target.value })}
        />
      </Form>
      <Form>
        <label>집중도</label>
        <InputRange
          id='concentration'
          value={concentration}
          _onChange={(e) =>
            setValue({ ...value, concentration: e.target.value })
          }
        />
      </Form>
      <Form>
        <label>만족도</label>
        <InputRange
          id='satisfaction'
          value={satisfaction}
          _onChange={(e) =>
            setValue({ ...value, satisfaction: e.target.value })
          }
        />
      </Form>
      <Button text='저장' _onClick={handleSubmit}></Button>
    </React.Fragment>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

export default TodoListInputForm;
