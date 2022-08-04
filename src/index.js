import Chart from './client/js/UI/Charts/chartRecords'
import Table from './client/js/UI/tabulateRecords'
import { weatherData } from './client/js/weatherInfo'
import './client/styles/style.scss'

const { head, data } = weatherData()
const chart = new Chart(data)
chart.generateChart()
chart.generateDataset()

const tabulate = new Table(head, data)
tabulate.generateTableData()

export const handleFetchMoreRecords = () => {
  const btn = document.querySelector('button')
  btn.addEventListener('click', tabulate.displayMoreRecords())
}
