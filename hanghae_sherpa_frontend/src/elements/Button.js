import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, width, margin, _onClick } = props;

  const styles = {
    width: width,
    margin: margin,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: '텍스트',
  width: '100%',
  margin: null,
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border: none;
`;

export default Button;
