import React from 'react';
import styled from 'styled-components';

const Input = () => {
  const { width, height, type, placeholder, children, _onChange } = props;

  const styles = { width, height };

  return (
    <React.Fragment>
      <label {...styles}>
        {children}
        <InputElem
          {...styles}
          onChange={_onChange}
          placeholder={placeholder}
          type={type}
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
};

const InputElem = styled.input`
  ${(props) => (props.width ? `width: ${props.width}` : '')};
  ${(props) => (props.height ? `height: ${props.height}` : '')};
  ${(props) => (props.type ? `type: ${props.type}` : '')};
  ${(props) => (props.placeholder ? `placeholder: ${props.placeholder}` : '')};
  box-sizing: border-box;
`;

export default Input;
