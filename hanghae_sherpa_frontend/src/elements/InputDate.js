import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '.';
import Swal from 'sweetalert2';

import 'react-datepicker/dist/react-datepicker.css';
import { graphCreators } from '../redux/modules/graph';
import moment from 'moment';

const InputDate = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const signupDate = useSelector((state) => state.graph.signup_date);

  React.useEffect(() => {
    dispatch(graphCreators.getGraphMiddleware(date));
    console.log(signupDate);
    console.log(new Date(date), new Date(signupDate));
    console.log(new Date(date) < new Date(signupDate));

    console.log(signupDate);

    if (new Date(date) < new Date(signupDate)) {
      Swal.fire({
        text: '가입일 보다 과거로 갈 수 없습니다!',
        width: '360px',
        confirmButtonColor: '#E3344E',
      });
      setTimeout(() => {
        window.location.href = '/main';
      }, 1000);
    }
    dispatch(graphCreators.updateDate(date));
  }, [date]);

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
