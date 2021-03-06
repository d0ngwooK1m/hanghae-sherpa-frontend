import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, width, height, margin, _onClick, type } = props;

  const styles = {
    width: width,
    margin: margin,
  };

  if (type === 'header') {
    return (
      <React.Fragment>
        <HeaderButton {...styles} height={height} onClick={_onClick}>
          {text}
        </HeaderButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} height={height} onClick={_onClick}>
        {text}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: '텍스트',
  width: '100%',
  height: '45px',
  margin: null,
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #77a464;
  color: white;
  font-weight: bold;
  padding: 12px 0px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #9dd485;
  }
  transition: 0.7s;
`;

const HeaderButton = styled.button`
  width: ${(props) => props.width};
  background-color: white;
  color: black;
  padding: 12px 0px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  transition: 0.7s;
`;

export default Button;
