import React from 'react';
import styled from 'styled-components';

const InputDate = (props) => {
  const { type, _onChange } = props;

  return (
    <React.Fragment>
      <InputDateEl type={type} onChange={_onChange}></InputDateEl>
    </React.Fragment>
  );
};

InputDate.defaultProps = {
  type: 'date',
  _onChange: () => {},
};

const InputDateEl = styled.input`
  type='date';
  id='currentDate';
`;

export default InputDate;
