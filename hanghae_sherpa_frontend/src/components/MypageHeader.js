import React from 'react';
import styled from 'styled-components';
import GobackBtn from '../elements/GobackBtn';
import LogoutBtn from '../elements/LogoutBtn';

const MypageHeader = () => {
  return (
    <React.Fragment>
      <Form>
        <LogoutBtn />
        <GobackBtn />
      </Form>
    </React.Fragment>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 4px auto;
  height: 40px;
  text-align: end;
`;

export default MypageHeader;
