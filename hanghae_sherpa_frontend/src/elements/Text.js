import React from 'react';
import styled from 'styled-components';

const Text = () => {
  const { bold, color, size, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
  };

  return (
    <React.Fragment>
      <p {...styles}>{children}</p>
    </React.Fragment>
  );
};

const P = styled.p`
  ${(props) => (props.color ? `color: ${props.color}` : '')};
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
`;

export default Text;
