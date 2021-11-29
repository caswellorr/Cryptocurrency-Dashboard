
// =========== SEARCH BUTTON ================

// Must search currency with its shorthand (BTC)

let searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', getCurrency )

function getCurrency () {

  let currency = document.getElementById('search-input').value;
    console.log(currency);

    getApi(currency);

}


// ========== FETCH CURRENCY FOR  JUMBOTRON GRAPH ==========

function getApi (currency) {

  let end = Date.now()
  // 1637769600
  let midnight = new Date()
  midnight.setHours(0,0,0,0)
  console.log((midnight))

  console.log((Date.parse(midnight))/1000)
  console.log(end)
  console.log(typeof end)
  let start = 1613750400
  console.log(start)
  console.log(typeof start)


  
  let requestUrl = `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${currency}&start=1546300800&end=${end}&period=14400`

  fetch (requestUrl)
  .then (function (response){
    return response.json();
  })
  .then(function (currency){
    console.log(currency);

  })




 }


 //find current utc to input into end and evaluate however far back we want the api to give us

//  let end = Date.now()

//  let start = (end - 300000)
 
//  console.log(start)
//  console.log(end)

// potentially for looping throught the data your getting back and inserting the data per element in the

for (let i = 0; i < currencyData.length; i++) {
  const currentCurrency = currencyData[i];
  
}
let lVal = currency[i].low
let hVal = currency[i].high
let oVal = currency[i].open
let cVal = currency[i].close

let datespan = currency[i].date
let object = {date: new Date(datespanyear, datespanmonth, 1),
  l: lval,
  h: hVal,
  o: oVal,
  c: cVal,}

dataSource.push(object)

const dataSource = [

];

let coinName = document.getElementById('search-input').value;

$(() => {
  $('#chart').dxChart({
    title: 'Stock Price',
    dataSource,
    commonSeriesSettings: {
      argumentField: 'date',
      type: 'candlestick',
    },
    legend: {
      itemTextPosition: 'left',
    },
    series: [
      {
          // name : comes from input in searchbtn
        name: coinName,
        openValueField: 'o',
        highValueField: 'h',
        lowValueField: 'l',
        closeValueField: 'c',
        reduction: {
          color: 'red',
        },
      },
    ],
    valueAxis: {
      tickInterval: 1,
      title: {
        text: 'US dollars',
      },
      label: {
        format: {
          type: 'currency',
          precision: 0,
        },
      },
    },
    argumentAxis: {
      workdaysOnly: true,
      label: {
        format: 'shortDate',
      },
    },
    export: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
      location: 'edge',
      customizeTooltip(arg) {
        return {
          text: `Open: $${arg.openValue}<br/>`
                            + `Close: $${arg.closeValue}<br/>`
                            + `High: $${arg.highValue}<br/>`
                            + `Low: $${arg.lowValue}<br/>`,
        };
      },
    },
  });
});

