import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { InputRange, Button, InputDate } from '../elements';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { todolistCreators } from '../redux/modules/todolist';
import { graphCreators } from '../redux/modules/graph';
import Swal from 'sweetalert2';
import moment from 'moment';

const TodoListInputForm = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.graph.data);
  console.log(data);

  const date = useSelector((state) => state.graph.date);
  const today = moment().format('YYYY-MM-DD');
  console.log(today);

  const [perfection, setPerfection] = useState('0');
  const [creativity, setCreativity] = useState('0');
  const [difficulty, setDifficulty] = useState('0');
  const [concentration, setConcentration] = useState('0');
  const [satisfaction, setSatisfaction] = useState('0');

  React.useEffect(() => {
    setPerfection(`${data[1].data[0].y}`);
    setCreativity(`${data[1].data[1].y}`);
    setDifficulty(`${data[1].data[2].y}`);
    setConcentration(`${data[1].data[3].y}`);
    setSatisfaction(`${data[1].data[4].y}`);
  }, [data]);

  const handleSubmit = () => {
    if (date !== today) {
      return Swal.fire({
        text: '지금은 데이터를 입력할 수 없습니다!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
    }

    const addInfo = {
      perfection,
      creativity,
      difficulty,
      concentration,
      satisfaction,
    };

    console.log(addInfo);
    dispatch(graphCreators.addGraphInfoMiddleware(addInfo, date));
  };

  return (
    <React.Fragment>
      <Grid>
        <Form>
          <label>완성도: {perfection}</label>
          <InputRange
            id='perpection'
            value={perfection}
            _onChange={(e) => {
              setPerfection(e.target.value);
              console.log(perfection);
            }}
          />
        </Form>
        <Form>
          <label>창의성: {creativity}</label>
          <InputRange
            id='creativity'
            value={creativity}
            _onChange={(e) => {
              setCreativity(e.target.value);
            }}
          />
        </Form>
        <Form>
          <label>난이도: {difficulty}</label>
          <InputRange
            id='difficulty'
            value={difficulty}
            _onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          />
        </Form>
        <Form>
          <label>집중도: {concentration}</label>
          <InputRange
            id='concentration'
            value={concentration}
            _onChange={(e) => {
              setConcentration(e.target.value);
            }}
          />
        </Form>
        <Form>
          <label>만족도: {satisfaction}</label>
          <InputRange
            id='satisfaction'
            value={satisfaction}
            _onChange={(e) => {
              setSatisfaction(e.target.value);
            }}
          />
        </Form>
        <Button
          width='100%'
          text='저장'
          _onClick={() => {
            handleSubmit();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

const contentsBox = css`
  display: flow-root;
  justify-content: center;
  align-items: center;
  height: 270px;
`;

const Grid = styled.div`
  ${({ theme }) => {
    return css`
      ${contentsBox}
      position: relative;
      justify-content: flex-end;
    `;
  }}
`;

const Form = styled.form`
  width: 100%;
  margin: 4px auto;
  height: 35px;
  text-align: center;
`;

export default TodoListInputForm;
