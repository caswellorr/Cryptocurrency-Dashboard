// ============ Global Variables for newsApi ===========
let newsApi = '7043854dc0f449fd9386019e6c883fb4'
let newsCategory = "bitcoin"
let newsUrl = `https://newsapi.org/v2/everything?q=${newsCategory}&apikey=${newsApi}`
let newsImage = document.getElementById('newsImage')
let newsImage1 = document.getElementById('newsImage1')


// ============ Get newsApi Function =============
function getNews() {
  fetch(newsUrl).then((response)=>{
      return response.json()
  })
      .then((news)=>{

          let sliceNews = news.articles.slice(-2);
           
          for(let i=0; i < sliceNews.length; i++){

              console.log(news.articles[i].title)
              console.log(news.articles[i].description)
              console.log(news.articles[i].url)

               newsImage.src = news.articles[2].urlToImage
               newsImage1.src = news.articles[4].urlToImage

               document.querySelector('#newsTitle').insertAdjacentHTML("beforebegin", news.articles[i].title)
               document.querySelector('#newsTitle1').insertAdjacentHTML("beforebegin", news.articles[2].title)
               document.querySelector('#newsArticle').insertAdjacentHTML("beforebegin", news.articles[i].description)
               document.querySelector('#newsArticle1').insertAdjacentHTML("beforebegin", news.articles[4].title)
               document.getElementById('newsCard').onclick = function changeContent() {
               document.getElementById('newsCard').url =   window.location.href=news.articles[2].url;
               }
               document.getElementById('newsCard1').onclick = function changeContent() {
               document.getElementById('newsCard1').url =   window.location.href=news.articles[4].url; 
        }};
      })
}

getNews();



// =========== SEARCH BUTTON & FUNCTION ================

// Must search currency by its abbreviation (BTC)***

let searchBtn = document.getElementById('search-button');

searchBtn.addEventListener('click', getCurrency)

// Get Currency Function on click of search button

function getCurrency() {

  let currency = document.getElementById('search-input').value;

  console.log(currency);

  getApi(currency);

};


// ========== FETCH CURRENCY FOR  JUMBOTRON GRAPH ==========

function getApi(currency) {

  // convertsunix to seconds
  let end = Math.round(Date.now() / 1000);
  console.log(end);

  let requestUrl = `https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${currency}&start=1632700800&end=${end}&period=86400`

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (currency) {
      currency = currency.slice(-10);
      console.log(currency);

      // ====== Variables ==== 

      let dataSource = [];

      let lVal;
      let hVal;
      let oVal;
      let cVal;

      let object;

      let coinName = document.getElementById('search-input').value;

      // ====== Loop thru data ========

      for (let i = 0; i < currency.length; i++) {
        const currentCurrency = currency[i];
        console.log(currentCurrency);
        lVal = currentCurrency.low;
        hVal = currentCurrency.high;
        oVal = currentCurrency.open;
        cVal = currentCurrency.close;

        // Converts Unix to human date format
        let date = currentCurrency.date;
        let milliseconds = date * 1000;
        let dateObject = new Date(milliseconds);
        let humanDateFormat = dateObject.toLocaleString();

        object = {

          date: humanDateFormat,
          l: lVal,
          h: hVal,
          o: oVal,
          c: cVal,

        };

        dataSource.push(object);

      };

      console.log(dataSource);

      // Display data onto graph

      $(() => {
        $('#chart').dxChart({
          title: 'Coin Prices (Past 10 Days)',
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
              text: 'US Dollars',
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
    });

};

