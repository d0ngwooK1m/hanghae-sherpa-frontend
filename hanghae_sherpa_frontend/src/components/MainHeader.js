import React from 'react';
import { LogoutBtn, DetailBtn, InputDate, Grid } from '../elements';

const MainHeader = () => {
  return (
    <React.Fragment>
      <Grid>
        <InputDate />
        <LogoutBtn />
        <DetailBtn />
      </Grid>
    </React.Fragment>
  );
};

export default MainHeader;
