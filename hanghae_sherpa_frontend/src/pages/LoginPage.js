import React from 'react';
import { Frame, LoginForm } from '../components';
import { Redirect } from 'react-router';

const LoginPage = () => {
  const cookie = document.cookie;

  if (cookie !== '') {
    return <Redirect to='/main' />;
  }

  return (
    <React.Fragment>
      <Frame>
        <LoginForm />
      </Frame>
    </React.Fragment>
  );
};

export default LoginPage;
