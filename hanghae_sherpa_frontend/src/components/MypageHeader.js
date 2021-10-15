import React from 'react';
import styled from 'styled-components';
import { GobackBtn, Grid, LogoutBtn, Text } from '../elements';

const MypageHeader = () => {
  return (
    <React.Fragment>
      <Grid>
        <Title size='20px' bold text-align='left' width='40%'>
          마이페이지
        </Title>
        <LogoutBtn />
        <GobackBtn />
      </Grid>
    </React.Fragment>
  );
};

const Title = styled.div`
  width: 40%;
  font-size: 20px;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
`;

export default MypageHeader;
