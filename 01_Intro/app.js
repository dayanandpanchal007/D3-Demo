console.log('d3 ', d3);

// d3.select('div')
//   .selectAll('p')
//   .data([1,2,3])
//   .enter()
//   .append('p')
//   .text(data => data);


const response = [
  { id: 'd1', value: '90', region: 'India'},
  { id: 'd2', value: '60', region: 'Israel'},
  { id: 'd3', value: '80', region: 'Russia'},
  { id: 'd4', value: '10', region: 'Bhutan'},
  { id: 'd5', value: '30', region: 'Nepal'},
  { id: 'd6', value: '10', region: 'Singapore'},
  { id: 'd7', value: '20', region: 'Japan'}
];

let sliced = [];

const divContainer = d3.select('div')
  .classed('container', true)
  .style('border', '1px solid red');

const bars = divContainer
  .selectAll('.bar')
  .data(response)
  .enter()
  .append('div')
  .classed('bar', true)
  .style('width', '38.028169014084504px')  // width i pulled it from svg
  .style('height', (data) => `${2*data.value}px`);


// svg
const xScale = d3.scaleBand([0, 300]).domain(response.map(dt => dt.region)).padding(0.1);
const yScale = d3.scaleLinear().domain([0, 100]).range([200, 0]);

const svgContainer = d3.select('svg')
  .classed('svgContainer', true);

const svgFill = svgContainer
  .selectAll('.fill')
  .data(response)
  .enter()
  .append('rect')
  .classed('fill', true)
  .attr('width', xScale.bandwidth())
  .attr('height', (data) => 200 - yScale(2 * data.value))
  .attr('x', data => xScale(data.region))
  .attr('y', data => yScale(data.value));


setTimeout(() => {
  sliced = response.slice(0, 4);
  svgFill.data(sliced).exit().remove();
}, 2000);

// setTimeout(() => {
//   sliced = response.slice(4);
//   console.log('sliced ', sliced);
//   svgFill.data(sliced);
// }, 5000);
