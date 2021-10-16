import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
  };

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
};

const P = styled.p`
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  margin: 0px 0px 5px 0px;
  font-weight: ${(props) => (props.bold ? '600' : '400')};
`;

export default Text;
