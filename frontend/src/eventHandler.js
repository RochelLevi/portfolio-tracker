function handleNewStock(portfolio, ticker, quantity, cost){
  Adapter.changePortfolioCashBalance(portfolio, cost)
    .then(data => portfolio.cashBalance = data.cash_balance)
    .then((x) => x ? Adapter.addStockToPortfolio(portfolio, ticker, quantity) : x)
    .then(data => data? portfolio.stocks.push(data) : data)
    .then((x) => x ? portfolio.createDataArrayAndRenderPieChart() : x)
    .then((x) => x ? HTML.addStockToSidebar(portfolio.id, portfolio.stocks[portfolio.stocks.length - 1], (cost/quantity)) : null)
}

function handleNewPortfolio(name){
  Adapter.addPortfolio(name)
      .then(portfolio => {HTML.addPortfolioHtml(portfolio); return portfolio})
}

function handleSellStock(portfolioId, stockPortfolio){
  
}
