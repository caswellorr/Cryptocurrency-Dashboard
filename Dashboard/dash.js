

// ====== FETCH CURRENCIES =======

function getApi () {

  let requestUrl = "https://poloniex.com/public?command=returnCurrencies";

  fetch (requestUrl)
  .then (function (response){
    return response.json();
  })
  .then(function (currency){
    console.log(currency);

  })
}

getApi()