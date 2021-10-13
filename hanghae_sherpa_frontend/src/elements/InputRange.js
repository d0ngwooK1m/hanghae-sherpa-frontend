import React from 'react';
import styled from 'styled-components';

const InputRange = (props) => {
  const { width, type, _onChange, min, max, children } = props;

  const styles = { width };
  return (
    <React.Fragment>
      <label {...styles}>
        {children}
        <Range
          {...styles}
          onChange={_onChange}
          type={type}
          min={min}
          max={max}
        ></Range>
      </label>
    </React.Fragment>
  );
};

InputRange.defaultProps = {
  width: '100%',
  type: 'range',
  min: '0',
  max: '10',
  _onChange: () => {},
};

const Range = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.type ? `type: ${props.type}` : '')};
`;

export default InputRange;
