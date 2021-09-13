
const countryData = {
  items: ['Dummy','India', 'Israel', 'Russia'],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(idx) {
    this.items.splice(idx, 1);
  },
  updateItem(idx, item) {
    this.items[idx] = item;
  }
};
console.log(d3);
const list = d3.select('ul')
  .selectAll('li')
  .data(countryData.items, data => data)
  .enter()
  .append('li')
  .text(data => data);

setTimeout(() => {
  countryData.addItem('Germany');
  list
    .data(countryData.items, data => data)
    .enter()
    .append('li')
    .text(data => data);
}, 2000);

setTimeout(() => {
  countryData.removeItem(0);
  list
    .data(countryData.items, data => data)
    .exit()
    .remove();
}, 4000);

setTimeout(() => {
  countryData.updateItem(2, 'Bhutan');
  list
    .data(countryData.items, data => data)
    .exit()
    .text('Bhutan')
}, 6000);

/*
setTimeout(() => {
  countryData.addItem('Germany');
  d3.select('ul')
  .selectAll('li')
  .data(countryData.items, data => data)
  .enter()
  .append('li')
  // .classed('added', true)
  .text(data => data);
}, 2000);

setTimeout(() => {
  countryData.removeItem(0);
  d3.select('ul')
  .selectAll('li')
  .data(countryData.items, data => data)
  .exit()
  // .classed('redundant', true)
  .remove()
}, 4000);

setTimeout(() => {
  countryData.updateItem(2, 'Bhutan');
  d3.select('ul')
  .selectAll('li')
  .data(countryData.items, data => data)
  .exit()
  // .classed('updated', true)
  .text(countryData.items[2])
}, 6000);
*/