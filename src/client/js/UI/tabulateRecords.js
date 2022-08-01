export default class Table {
  // table element
  constructor(head, data) {
    this.table = document.getElementById('table')
    this.limit = 10
    this.head = head
    this.data = data
  }

  spanTableHead(head = []) {
    let tHead = this.table.createTHead()
    console.log('tHead: ', tHead)

    let row = tHead.insertRow()

    let headTableData = this.head
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
    let bodyTableData = this.data

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

  displayMoreRecords() {
    this.limit += 10
    this.spanTableBody()
  }

  generateTableData() {
    this.spanTableHead()
    this.spanTableBody()
    //
  }
}
