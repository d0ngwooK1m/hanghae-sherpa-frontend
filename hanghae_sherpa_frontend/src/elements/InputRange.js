import React from 'react';
import styled from 'styled-components';

const InputRange = (props) => {
  const { width, type, _onChange, min, max, value, step, children } = props;

  const styles = { width };
  return (
    <React.Fragment>
      <label {...styles}>
        {children}
        <Range
          type={type}
          value={value}
          {...styles}
          min={min}
          max={max}
          step={step}
          onChange={_onChange}
        ></Range>
      </label>
    </React.Fragment>
  );
};

InputRange.defaultProps = {
  type: 'range',
  value: '0',
  width: '100%',
  min: '0',
  max: '10',
  step: '1',
  _onChange: () => {},
};

const Range = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.type ? `type: ${props.type}` : '')};
  ${(props) => (props.value ? `value: ${props.value}` : '')};
`;

export default InputRange;
