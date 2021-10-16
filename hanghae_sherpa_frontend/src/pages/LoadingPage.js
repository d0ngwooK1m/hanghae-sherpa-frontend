import React from 'react';
import { Spinner, Frame } from '../components';
import styled from 'styled-components';
import { Grid } from '../elements';

const LoadingPage = () => {
  return (
    <Frame>
      <Grid padding='100px 0px'>
        <Title>로딩중..</Title>
        <Spinner />
      </Grid>
    </Frame>
  );
};

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 8px;
  margin-bottom: 96px;
  text-align: center;
`;

export default LoadingPage;
