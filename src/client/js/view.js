import { weatherData } from './weatherInfo';


class Table {
  // table element
  constructor(sortDirection) {
    this.table = document.getElementById('table');
    
  }

  spanTableHead(head = []) {
    let tHead = this.table.createTHead();
    let row = tHead.insertRow();

    let headTableData = weatherData().head;
    let headText = Object.values(headTableData);
    headText.map((key) => {
      let th = document.createElement('th');
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
      console.log('headTableData: ', th);
    });
  }

  spanTableBody(body = []) {
    let bodyTableData = weatherData().body
    console.log('bodyTableData: ', bodyTableData);
    bodyTableData.map(data => {
      let row = table.insertRow()
      Object.keys(data).map((key) => {
        let cell = row.insertCell()
        let text = document.createTextNode(data[key])
        cell.appendChild(text)
      })
    })

    
  }

  generateTableData() {
    const tableHead = Object.values(weatherData().head);
    // console.log('weatherData().head::', tableHead)
    this.spanTableHead(weatherData().tableHead);
    this.spanTableBody(weatherData().body);
    // console.log('weatherData().body: ', weatherData().body);
  }

  
}

const tabulate = new Table();

tabulate.generateTableData();
