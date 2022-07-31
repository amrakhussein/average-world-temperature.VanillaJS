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
  // table element
  constructor(data) {
    this.ctx = document.getElementById('chart')
    this.data = Object.values(data)
    this.records = []
  }

 

  generateChart() {
    new Chartify(this.ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          
        ],
      },
    })
  }
}
