function handleNewStock(portfolio, ticker, quantity, cost){
  if(cost <=  portfolio.cashBalance){
    Adapter.changePortfolioCashBalance(portfolio, cost)
      .then(data => portfolio.cashBalance = data.cash_balance)
      .then(() => Adapter.addStockToPortfolio(portfolio, ticker, quantity))
      .then(data => portfolio.stocks.push(data))
      .then(() => portfolio.refresh())

  }
}


function handleNewPortfolio(name){
  Adapter.addPortfolio(name)
      .then(el => new Portfolio(el.id, el.user_id, el.name, el.stockportfolios, el.cash_balance))
      .then(portfolio => {portfolio.refresh(); return portfolio})
      .then(portfolio => portfolio.addStockFormListener())
}



function handleSellStock(portfolio_id, stock_id){
  // console.log("portfolio_id: " + portfolio_id + " stock_id: " + stock_id);
  let portfolio = Portfolio.all().find((portfolio) => {
    return portfolio.id === portfolio_id
  })
  let stock = portfolio.stocks.find((stock) => {
    return stock.id === stock_id
  })
  Adapter.getStockPrice(stock.ticker)
    .then(price => Adapter.changePortfolioCashBalance(portfolio, price * (-stock.quantity)))
    .then(data => portfolio.cashBalance = data.cash_balance)
    .then(() => Adapter.deleteStock(stock.id))
    .then(() => {
      stockDiv = document.getElementById(`sidebar-stock-${stock.id}`)
      stockDiv.parentNode.removeChild(stockDiv)
    })
    .then(() => portfolio.deleteStockById(stock.id))
    .then(() => portfolio.createDataArrayAndRenderPieChart())
}
