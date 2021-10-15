import React, { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { todolistCreators } from '../redux/modules/todolist';
import { Input } from '.';

import 'react-datepicker/dist/react-datepicker.css';
import { graphCreators } from '../redux/modules/graph';
import moment from 'moment';

// const InputDate = (props) => {
//   const { type, _onChange } = props;

//   const dateInput = document.getElementById('date');
//   dateInput.valueAsDate = new Date();

//   return (
//     <React.Fragment>
//       <InputDateEl type={type} onChange={_onChange}></InputDateEl>
//     </React.Fragment>
//   );
// };

// InputDate.defaultProps = {
//   type: 'date',
//   _onChange: () => {},
// };

// const InputDateEl = styled.input`
//   type='date';
//   id='currentDate';
// `;

// React Datepicker
const InputDate = () => {
  const dispatch = useDispatch();
  const _is_updated = useSelector((state) => state.graph.is_updated);
  // console.log(_is_updated);

  // const history = useHistory();

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  // console.log(moment().format('YYYY-MM-DD'));
  React.useEffect(() => {
    dispatch(graphCreators.getGraphMiddleware(date));
    dispatch(graphCreators.updateDate(date));
  }, [_is_updated, date]);

  // 데이터를 로드받지 않으면 datepicker 날짜 비활성화.
  // const handleDateSelect = () => {
  //   if (todoList === '') {
  //     alert('저장된 데이터가 없습니다.');
  //     return;
  //   }
  //   dispatch(todolistCreators.loadMiddleware());
  // };

  return (
    <React.Fragment>
      <Input
        type='date'
        _onChange={(e) => {
          setDate(e.target.value);
        }}
        width='40%'
        height='42px'
        value={date}
      />
    </React.Fragment>
  );
};

InputDate.defaultProps = {};

export default InputDate;
