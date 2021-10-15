import React, { useState } from 'react';
import styled from 'styled-components';
import { InputRange, Button, InputDate } from '../elements';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { todolistCreators } from '../redux/modules/todolist';
import { graphCreators } from '../redux/modules/graph';
import moment from 'moment';
import DetailBtn from '../elements/DetailBtn';
import LogoutBtn from '../elements/LogoutBtn';

const TodoListInputForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [value, setValue] = useState({
  //   // date: moment().format('YYYY-MM-DD'),
  //   // 오늘 날짜로 기본 설정
  //   perfection: '',
  //   creativity: '',
  //   difficulty: '',
  //   concentration: '',
  //   satisfaction: '',
  // });

  // const {
  //   // date,
  //   perfection,
  //   creativity,
  //   difficulty,
  //   concentration,
  //   satisfaction,
  // } = value;
  const data = useSelector((state) => state.graph.data);
  console.log(data);
  console.log(data[1].data[0].x);

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

  // 데이터 전송 함수
  // const handleSubmit = (e) => {
  //   // 원래는 firebase에 저장하기 위한 데이터 객체..
  //   const addInfo = {
  //     ...value,
  //     // date: parseInt(date.split('-').join('')), // 날짜 형태 변경하여 저장.
  //     // query: parseInt(date.slice(0, 5)),
  //     perfection,
  //     creativity,
  //     difficulty,
  //     concentration,
  //     satisfaction,
  //   };

  //   if (addInfo.perfection === '') {
  //     addInfo.perfection = '5';
  //   }
  //   if (addInfo.creativity === '') {
  //     addInfo.creativity = '5';
  //   }
  //   if (addInfo.difficulty === '') {
  //     addInfo.difficulty = '5';
  //   }
  //   if (addInfo.concentration === '') {
  //     addInfo.concentration = '5';
  //   }
  //   if (addInfo.satisfaction === '') {
  //     addInfo.satisfaction = '5';
  //   }
  //   console.log(addInfo);
  //   dispatch(graphCreators.addGraphInfoMiddleware(addInfo));
  //   // history.replace('/main');
  // };

  const handleSubmit = () => {
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
  // console.log(date);

  return (
    <React.Fragment>
      <div>
        <InputDate width='50%' />
        <LogoutBtn />
        <DetailBtn />
      </div>
      <Form>
        <label>완성도: {perfection}</label>
        <InputRange
          id='perpection'
          value={perfection}
          // _onChange={(e) => setValue({ ...value, perfection: e.target.value })}
          _onChange={(e) => {
            setPerfection(e.target.value);
          }}
        />
      </Form>
      <Form>
        <label>창의성: {creativity}</label>
        <InputRange
          id='creativity'
          value={creativity}
          // _onChange={(e) => setValue({ ...value, creativity: e.target.value })}
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
          // _onChange={(e) => setValue({ ...value, difficulty: e.target.value })}
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
          // _onChange={(e) =>
          //   setValue({ ...value, concentration: e.target.value })
          // }
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
          // _onChange={(e) =>
          //   setValue({ ...value, satisfaction: e.target.value })
          // }
          _onChange={(e) => {
            setSatisfaction(e.target.value);
          }}
        />
      </Form>
      <Button
        width='100%'
        text='저장'
        _onClick={() => {
          // if (date === today) {
          //   handleSubmit();
          // } else {
          //   alert('지난 일을 수정할 수 없어요!');
          // }
          handleSubmit();
        }}
      ></Button>
    </React.Fragment>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 4px auto;
  height: 40px;
  text-align: center;
`;

export default TodoListInputForm;
