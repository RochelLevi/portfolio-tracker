function handleNewStock(portfolio, ticker, quantity, cost){
  Adapter.changePortfolioCashBalance(portfolio, cost)
    .then(data => portfolio.cashBalance = data.cash_balance)
    .then(() => Adapter.addStockToPortfolio(portfolio, ticker, quantity))
    .then(data => portfolio.stocks.push(data))
    .then(() => portfolio.createDataArrayAndRenderPieChart())
    .then(() => HTML.addStockToSidebar(portfolio.id, portfolio.stocks[portfolio.stocks.length - 1], (cost/quantity)))
}

function handleNewPortfolio(name){
  Adapter.addPortfolio(name)
      .then(portfolio => {HTML.addPortfolioHtml(portfolio); return portfolio})
}
