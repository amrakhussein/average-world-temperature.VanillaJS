import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as Chartify,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
} from 'chart.js'
import { generateGlobalRecords } from './globalRecords'
Chartify.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  BarController,
  CategoryScale,
  BarElement
)

export default class Chart {

  constructor(data, years) {
    this.ctx = document.getElementById('chart')
    this.xLabel = Object.values(data)
    this.records = []
    this.data = data
    this.years = years
    this.d = [{Year: "1906", Glob: "-0.23", NHem: -0.22, SHem: -0.23},{Year: "1909", Glob: "-0.47", NHem: -0.46, SHem: -0.49},{Year: "1910", Glob: "-0.43", NHem: -0.43, SHem: -0.44},
  {Year: "1908", Glob: "-0.43", NHem: -0.45, SHem: -0.42},{Year: "1911", Glob: "-0.43", NHem: -0.39, SHem: -0.47}]
  }


 generateDataset() {
console.log('data',this.data)
 }

  generateChart() {
    new Chartify(this.ctx, {
      type: 'line',
      data: {
        // labels: [],
        datasets: [
          {
              label: 'Global World Temperature',
              data: this.data,
                tension: 0.4,
      parsing: {
        xAxisKey: 'Year',
        yAxisKey: 'Glob'
      },
              // backgroundColor: [
              //   'rgba(255, 99, 132, 0.2)',
              //   'rgba(54, 162, 235, 0.2)',
              //   'rgba(255, 206, 86, 0.2)',
              //   'rgba(75, 192, 192, 0.2)',
              //   'rgba(153, 102, 255, 0.2)',
              //   'rgba(255, 159, 64, 0.2)',
              // ],
              // borderColor: [
              //   'rgba(255, 99, 132, 1)',
              //   'rgba(54, 162, 235, 1)',
              //   'rgba(255, 206, 86, 1)',
              //   'rgba(75, 192, 192, 1)',
              //   'rgba(153, 102, 255, 1)',
              //   'rgba(255, 159, 64, 1)',
              // ],
              borderWidth: 1,
            },
      ],
    
    },
    })
  }
}
