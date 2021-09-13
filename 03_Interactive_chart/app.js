
console.log(d3)

const response = [
  { id: 'd1', value: 90, region: 'India'},
  { id: 'd2', value: 60, region: 'Israel'},
  { id: 'd3', value: 80, region: 'Russia'},
  { id: 'd4', value: 10, region: 'Bhutan'},
  { id: 'd5', value: 30, region: 'Nepal'},
  { id: 'd6', value: 10, region: 'Singapore'},
  { id: 'd7', value: 20, region: 'Japan'}
];

const CHART_WIDTH = 600;
const CHART_HEIGHT = 400;

const xAxis = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
const yAxis = d3.scaleLinear().range([CHART_HEIGHT, 0]);
console.log('max ', d3.max(response, r => r.value));
console.log('yAxis:90  ', CHART_HEIGHT - yAxis(90));
xAxis.domain(response.map(r => r.region));
yAxis.domain([0, d3.max(response, r => r.value) + 10]);

const chartContainer = d3.select('svg').attr('width', CHART_WIDTH).attr('height', CHART_HEIGHT);

const chart = chartContainer.append('g');

chart
  .selectAll('bar')
  .data(response)
  .enter()
  .append('rect')
  .classed('bar', true)
  .attr('width', xAxis.bandwidth())
  .attr('height', data => CHART_HEIGHT - yAxis(4 * data.value))
  .attr('x', data => xAxis(data.region))
  .attr('y', data => yAxis(data.value));

chart
  .selectAll('label')
  .data(response)
  .enter()
  .append('text')
  .text(data => data.value)
  .attr('x', data => xAxis(data.region) + xAxis.bandwidth() / 2)
  .attr('y', data => yAxis(data.value) - 10)
  .attr('text-anchor', 'middle')
  .classed('label', true);

  