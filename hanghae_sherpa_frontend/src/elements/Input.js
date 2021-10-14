import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const {
    width,
    height,
    type,
    placeholder,
    children,
    _onChange,
    _onClick,
    value,
  } = props;

  const styles = { width, height };

  return (
    <React.Fragment>
      <label {...styles}>
        {children}
        <InputElem
          {...styles}
          onChange={_onChange}
          onClick={_onClick}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </label>
    </React.Fragment>
  );
};

Input.defaultProps = {
  width: '100%',
  height: '40px',
  type: 'text',
  placeholder: '문구를 입력해 주세요',
  _onChange: () => {},
  _onClick: () => {},
  value: '',
};

const InputElem = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.height ? `height: ${props.height}` : '')};
  ${(props) => (props.type ? `type: ${props.type}` : '')};
  ${(props) => (props.placeholder ? `placeholder: ${props.placeholder}` : '')};
  box-sizing: border-box;
`;

export default Input;
