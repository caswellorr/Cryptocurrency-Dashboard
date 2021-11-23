
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

//   let requestUrl = "https://poloniex.com/public?command=returnCurrencies";

//   fetch (requestUrl)
//   .then (function (response){
//     return response.json();
//   })
//   .then(function (currency){
//     console.log(currency);

//   })
// }

// getApi()

// ========= JUMBOTRON CHART ==========
const dataSource = [{
  date: new Date(1994, 2, 1),
  l: 24.00,
  h: 25.00,
  o: 25.00,
  c: 24.875,
}, {
  date: new Date(1994, 2, 2),
  l: 23.625,
  h: 25.125,
  o: 24.00,
  c: 24.875,
}, {
  date: new Date(1994, 2, 3),
  l: 26.25,
  h: 28.25,
  o: 26.75,
  c: 27.00,
}, {
  date: new Date(1994, 2, 4),
  l: 26.50,
  h: 27.875,
  o: 26.875,
  c: 27.25,
}, {
  date: new Date(1994, 2, 7),
  l: 26.375,
  h: 27.50,
  o: 27.375,
  c: 26.75,
}, {
  date: new Date(1994, 2, 8),
  l: 25.75,
  h: 26.875,
  o: 26.75,
  c: 26.00,
},];

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
        openValueField: 'open',
        highValueField: 'high',
        lowValueField: 'low',
        closeValueField: 'close',
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