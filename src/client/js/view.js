import { weatherData } from './weatherInfo';

console.log('head::', weatherData().body);

class Table {
  // table element
  constructor( sortDirection) {
    this.table = document.getElementById('table');
    this.sorted = true;
    this.sortDirection = sortDirection
  }

  spanTableHead(head = []) {
    const tableHeader = `
    <thead>
      <tr>${head
        .map(
          (h) => `
      <th>${h}</th>
      `
        )
        .join('')}</tr>
    </thead>
    `;
    this.table.insertAdjacentHTML('beforeend', tableHeader);
  }

  spanTableBody(body = []) {
    // const bodyRow = body
    // console.log('bodyrow', bodyRow)
    const tableBody = `
    <tbody>
    ${body
      .map(
        (row) =>
          `
      <tr>${row
        .map(
          (item) => `
      <td>${item}</td>
      `
        )
        .join('')}</tr>`
      )
      .join('')}
    </tbody>
    `;
    this.table.insertAdjacentHTML('beforeend', tableBody);
  }
  generateTableData() {
    this.spanTableHead(weatherData().head);
    this.spanTableBody(weatherData().body);
  }


}


const tabulate = new Table();

tabulate.generateTableData();