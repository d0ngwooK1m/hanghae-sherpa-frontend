import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Spinner, Frame } from '../components';
import styled from 'styled-components';
import { Grid } from '../elements';

const LoadingPage = () => {
  // const [title, setTitle] = useState('로딩중..');
  const history = useHistory();

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setTitle((title) => title + '.');
  //   }, 700);
  // }, [title]);

  React.useEffect(() => {
    setTimeout(() => history.push('/'), 1000);
  }, [history]);

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
