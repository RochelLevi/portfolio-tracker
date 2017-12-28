class Adapter{
  static getStockPrice(ticker){
    return fetch(`https://api.iextrading.com/1.0/stock/${ticker}/quote`)
      .then(resp => resp.json())
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

  static addPortfolio(name){
    return fetch(`http://localhost:3000/api/portfolio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({name: name})
    }).then(res => res.json())
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

  static changePortfolioCashBalance(portfolio, cost){
    return fetch(`http://localhost:3000/api/portfolio/${portfolio.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({cash_balance: portfolio.cashBalance - cost})
    }).then(res => res.json())
  }

}
