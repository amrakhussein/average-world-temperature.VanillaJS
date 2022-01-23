console.log('works');
import * as weatherDataCSV from '../ZonAnn.Ts+dSST.csv';

export function weatherData() {
  const weatherInfo = weatherDataCSV;
  console.log('csv::::', weatherInfo);



  // filter desired data out of json
  // year, global, nhem, shem
  const body = JSON.parse(JSON.stringify(weatherDataCSV, ['Year', 'Glob', 'NHem', 'SHem'])) 
  console.log('body: ', body);

  const head = {
    year: 'Year',
    global: 'Global',
    nHem: 'Northern Hemisphere',
    sHem: 'Southern Hemisphere',
  };

  // console.log('head::::', typeof body.Year);

  return {
    head,
    body,
  };
}

// export function weatherData() {

//   // let fetcOpts = {
//   //   //   detects automatically!
//   //   method: 'GET',
//   //   headers: {
//   //     'Content-Type': 'text/csv; charset=UTF-8',
//   //   },
//   // };

//   // let parseOpts = {
//   //   delimiter: ',', // detects automatically!
//   //   header: false,
//   //   skipEmptyLines: true,
//   //   newline: '\n', // detects automatically!
//   // };

//   try {
//     // fetch and parse weather data
//     const data =  fetch(weatherDataCSV);

//     // let head = data.map((h) => h[0]);
//     // console.log('head::::', data);
//     const res =  data.then(x => x.text())
//     console.log('data:::', res);
//     if ((data.status === 200) | (data.status === 201)) {
//       // console.log('data', res)

//       // const dataCSV = Papa.parse(res, parseOpts);
//       // preparing data

//       // let body = dataCSV.data.slice(1).map((data) => data);

//       // return {
//       //   head,
//       //    body
//       // };
//     }
//   } catch (e) {
//     console.log(
//       'err!',
//       `unexpected error has been encountered::: ${e.message}`
//     );
//   }
// }
// weatherData()
