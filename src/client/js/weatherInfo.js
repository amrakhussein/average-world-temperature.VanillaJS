import * as weatherDataCSV from '../ZonAnn.Ts+dSST.csv'

export function weatherData() {
  const weatherInfo = weatherDataCSV

  
  const head = {
    year: 'Year',
    global: 'Global',
    nHem: 'Northern Hemisphere',
    sHem: 'Southern Hemisphere',
  }
  
  const prepareDataset = () => {
    const datasetFiltered = JSON.parse(
      JSON.stringify(weatherInfo, ['Year', 'Glob', 'NHem', 'SHem'])
    )

    const transformer = (key, val) => {
      if (key === "Year") return JSON.stringify(val)
      return val
    }
   return JSON.parse(
      JSON.stringify(datasetFiltered, transformer)
    )
    
  
  }
  prepareDataset()
  console.log('  prepareDataset(): ',   prepareDataset());

  
  return {
    head,
    data: prepareDataset(),
  }
}
