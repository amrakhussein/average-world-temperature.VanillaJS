console.log('works');
import * as weatherDataCSV from '../ZonAnn.Ts+dSST.csv';



export function weatherData() {
  const weatherInfo = weatherDataCSV
  // console.log('csv::::', weatherInfo);

  let head = weatherInfo.map((h) => h);
  // console.log('head::::', head);

  const body = weatherInfo.slice(1).map((data) => data);
  // console.log('body::::', body);

  return {
    head,
    body
  }

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