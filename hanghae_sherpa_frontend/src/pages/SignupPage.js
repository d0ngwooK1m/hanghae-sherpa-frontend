import React from 'react';
import { SignupForm, Frame } from '../components';
import { Redirect } from 'react-router';

import { Text } from '../elements';

const SignupPage = () => {
  const cookie = document.cookie;
  if (cookie !== '') {
    return <Redirect to='/main' />;
  }

  return (
    <React.Fragment>
      <Frame>
        <Text>Login / Register</Text>
        <SignupForm />
      </Frame>
    </React.Fragment>
  );
};

export default SignupPage;
