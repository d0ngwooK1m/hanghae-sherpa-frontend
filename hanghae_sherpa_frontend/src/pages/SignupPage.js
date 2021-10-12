import React from 'react';
import { SignupForm, Frame } from '../components';

import { Grid, Text } from '../elements';

const SignupPage = () => {
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
