import React from 'react';
import { Grid } from '../elements';

const Frame = (props) => {
  return (
    <React.Fragment>
      <Grid width='100vw' height='100vh' is_flex>
        <Grid
          width='360px'
          height='640px'
          border='1px solid'
          padding='10px 15px'
        >
          {props.children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Frame;
