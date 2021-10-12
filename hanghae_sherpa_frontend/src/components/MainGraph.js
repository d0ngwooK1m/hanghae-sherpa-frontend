import React, { useState } from 'react';
import * as d3 from 'd3';

const MainGraph = () => {
  // const [data1, setData1] = React.useState();
  const [data] = useState([220, 100, 55, 115, 194, 210, 50]);
  const svgRef = React.useRef();

  React.useEffect(() => {
    const w = 340;
    const h = 250;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', 'aliceblue')
      .style('margin-top', '50')
      .style('overflow', 'visible');

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append('g').call(xAxis).attr('transform', `translate(0. ${h})`);
    svg.append('g').call(yAxis);

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('d', (d) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
    </React.Fragment>
  );
};

export default MainGraph;
