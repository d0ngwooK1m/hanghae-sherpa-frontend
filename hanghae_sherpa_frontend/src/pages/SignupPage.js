import React from 'react';
import { SignupForm, Frame } from '../components';

import { Text } from '../elements';

const SignupPage = () => {
  return (
    <React.Fragment>
      <Frame>
        <SignupForm />
      </Frame>
    </React.Fragment>
  );
};

export default SignupPage;
