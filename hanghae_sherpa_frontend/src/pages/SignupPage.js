import React from 'react';
import { SignupForm } from '../components';

import { Grid, Text } from '../elements';

const SignupPage = () => {
  return (
    <React.Fragment>
      <Grid width='100vw' height='100vh' is_flex>
        <Grid
          width='360px'
          height='640px'
          border='1px solid'
          padding='0px 10px'
        >
          <Text>Login / Register</Text>
          <SignupForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignupPage;
