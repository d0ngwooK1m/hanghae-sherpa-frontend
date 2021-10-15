import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { useDispatch, useSelector } from 'react-redux';
import { graphCreators } from '../redux/modules/graph';

import { Grid } from '../elements';

const MypageGraph = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.graph.mypage_data);
  console.log(data);
  const _is_updated = useSelector((state) => state.graph.is_updated);

  React.useEffect(() => {
    dispatch(graphCreators.getMypageGraphMiddleware());
  }, [_is_updated]);

  return (
    <React.Fragment>
      <Grid width='340px' height='330px' margin='auto'>
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 100, bottom: 20, left: 20 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: '0',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=' >-.2f'
          curve='natural'
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            format: () => null,
          }}
          // axisBottom={{
          //   orient: 'bottom',
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: 'transportation',
          //   legendOffset: 36,
          //   legendPosition: 'middle',
          // }}
          // axisLeft={{
          //   orient: 'left',
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: 'count',
          //   legendOffset: -40,
          //   legendPosition: 'middle',
          // }}
          enableGridX={false}
          enableGridY={false}
          colors={{ scheme: 'nivo' }}
          enablePoints={false}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableArea={true}
          areaOpacity={0.9}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Grid>
    </React.Fragment>
  );
};

export default MypageGraph;
