class Adapter{
  static getStockPrice(ticker){
    let key = "0KZIZFNYCY87CCZ6"
    return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=${key}`)
      .then(res => res.json())
  }

  static getPortfolios(){
    return fetch(`http://localhost:3000/api/portfolio`)
      .then(res => res.json())
  }

  //not in use
  static getStocks(){
    return fetch(`http://localhost:3000/api/stocks`)
      .then(res => res.json())
  }

  static addStockToPortfolio(portfolio, ticker, quantity){
    return fetch(`http://localhost:3000/api/stockportfolios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({portfolio_id: portfolio.id, quantity: quantity, ticker: ticker})
    }).then(res => res.json())
  }

}
