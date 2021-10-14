import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useDispatch, useSelector } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';

import { Grid } from '../elements';

const MainGraph = () => {
  const dispatch = useDispatch();
  const _is_updated = useSelector((state) => state.graph.is_updated);
  console.log(_is_updated);

  React.useEffect(() => {
    dispatch(graphCreators.getGraphMiddleware());
  }, [_is_updated]);

  const data = useSelector((state) => state.graph.data);
  console.log(data);

  const Tdata = [data[1]];
  const Ydata = [data[0]];
  return (
    <React.Fragment>
      <Grid width='340px' height='330px' position='relative' margin='auto'>
        <Grid position='absolute' top='0px' zIndex='4' height='330px'>
          <ResponsiveLine
            data={Ydata}
            colors={['#B6CFB4']}
            areaOpacity={0.7}
            // layers={['grid', 'axes', 'lines', 'markers', 'legends']}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            enableArea={true}
            enableGridX={false}
            enableGridY={false}
            curve='stepBefore'
          />
        </Grid>
        <Grid position='absolute' top='0px' zIndex='5' height='330px'>
          <ResponsiveLine
            data={Tdata}
            colors={['#79FF71']}
            areaOpacity={0.7}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            axisLeft={null}
            enableGridY={false}
            axisBottom={null}
            enableArea={true}
            enableGridX={false}
            enableGridY={false}
            curve='stepBefore'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainGraph;
