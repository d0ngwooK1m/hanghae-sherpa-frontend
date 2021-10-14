import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className='example-custom-input' onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <InputDatePicker
      selected={startDate}
      dateFormat='yyyy-MM-dd'
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

const InputDatePicker = styled(DatePicker)`
  margin='auto'
  background='#216ba5'
  color='#fff'
`;

export default InputDate;
