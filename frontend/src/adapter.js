class Adapter{
  static getStockPrice(ticker){
    key = "0KZIZFNYCY87CCZ6"
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${key}`)
      .then(res => res.json())
  }
}
