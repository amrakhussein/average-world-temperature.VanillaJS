import { weatherData } from '../weatherInfo'

export default class Table {
  // table element
  constructor() {
    this.table = document.getElementById('table')
    this.limit = 10
  }

  spanTableHead(head = []) {
    let tHead = this.table.createTHead()
    console.log('tHead: ', tHead)

    let row = tHead.insertRow()

    let headTableData = weatherData().head
    let headText = Object.values(headTableData)
    headText.map((key) => {
      let th = document.createElement('th')
      let text = document.createTextNode(key)
      th.setAttribute('scope', 'col')
      th.appendChild(text)
      row.appendChild(th)
    })
  }

  spanTableBody(body = []) {
    let bodyTableData = weatherData().body

    let tBody = this.table.createTBody()
    bodyTableData.map((data, idx) => {
      if (idx <= this.limit) {
        let row = tBody.insertRow()
        Object.keys(data).map((key) => {
          let cell = row.insertCell()
          let text = document.createTextNode(data[key])
          cell.appendChild(text)
        })
      }
    })
  }

  fetchMoreRecords() {
    this.limit += 10
    this.spanTableBody()
  }

  generateTableData() {
    this.spanTableHead(weatherData().tableHead)
    this.spanTableBody(weatherData().body)
    //
  }
}
