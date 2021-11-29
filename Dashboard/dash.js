
// =========== SEARCH BUTTON & FUNCTION ================

// Must search currency by its shorthand (BTC)***

let searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', getCurrency)

// Get Currency Function on click of search button


function getCurrency() {
  
  let currency = document.getElementById('search-input').value;

  console.log(currency);

  getApi(currency);

}


// ========== FETCH CURRENCY FOR  JUMBOTRON GRAPH ==========

function getApi(currency) {

  let end = Date.now()

  let requestUrl = `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${currency}&start=1632700800&end=${end}&period=86400`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (currency) {
      currency = currency.slice(-10);
      console.log(currency);
    })

}

// potentially for looping through the data your getting back and inserting the data per element in the chart

// ========= Variables =========

let dataSource = [];

let lVal;
let hVal;
let oVal;
let cVal;

let datespan;

let object;

let currentDay = moment().format("Do");
let currentYear = moment().format("YYYY");

let coinName = document.getElementById('search-input').value;

console.log(coinName);
console.log(currentDay);
console.log(currentYear);

// ====== Loop thru data ========

for (let i = 0; i < currency.length; i++) {
  const currentCurrency = currency[i];

  lVal = currentCurrency[i].low;
  hVal = currentCurrency[i].high;
  oVal = currentCurrency[i].open;
  cVal = currentCurrency[i].close;

  datespan = currentCurrency[i].date;

  object = {

    date: new Date(currentYear, 11, currentDay),
    l: lVal,
    h: hVal,
    o: oVal,
    c: cVal,

  };

  dataSource.push(object);

}

console.log(dataSource);

// =========== Insert data into chart ========

$(() => {
  $('#chart').dxChart({
    title: 'Coin Price',
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

