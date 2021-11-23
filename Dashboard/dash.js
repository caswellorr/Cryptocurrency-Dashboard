
// =========== SEARCH BUTTON ================

// Present limited options with jquery widget - top 5 currencies

// let searchBtn = document.getElementById('search-button');

// searchBtn.addEventListener('click', getCurrency )

// function getCurrency () {

//   let currency = document.getElementById('search-input').value;
//     console.log(currency);
// }


// ====== FETCH CURRENCIES =======

// function getApi () {

  let requestUrl = "https://poloniex.com/public?command=returnCurrencies";
  requestUrl = `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${"BTC"}&start=1546300800&end=1546646400&period=14400`

  fetch (requestUrl)
  .then (function (response){
    return response.json();
  })
  .then(function (currency){
    console.log(currency);

  })
// }

// getApi()

// // ========= JUMBOTRON CHART ==========
// potentially for looping throught the data your getting back and inserting the data per element in the
//for 
let lval = currency[i].low
let datespan = currency[i].date
let object = {date: new Date(datespanyear, datespanmonth, 1),
  l: lval,
  h: 25.00,
  o: 25.00,
  c: 24.875,}
  dataSource.push(object)

const dataSource = [];

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
        name: 'DELL',
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












// function getChart () {

//   let chartUrl = "https://poloniex.com/public?command=returnChartData&currencyPair=BTC_XMR&start=1546300800&end=1546646400&period=14400";

//   fetch (chartUrl)
//   .then (function (response){
//     return response.json();
//   })

//   .then (function (chart){
//     console.log (chart);
//   })


// }

// getChart