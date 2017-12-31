function handleNewStock(portfolio, ticker, quantity, cost){
  Adapter.changePortfolioCashBalance(portfolio, cost)
    .then(data => portfolio.cashBalance = data.cash_balance)
    .then((x) => x ? Adapter.addStockToPortfolio(portfolio, ticker, quantity) : x)
    .then(data => data? portfolio.stocks.push(data) : data)
    .then((x) => x ? portfolio.createDataArrayAndRenderPieChart() : x)
    .then((x) => x ? HTML.addStockToSidebar(portfolio, portfolio.stocks[portfolio.stocks.length - 1], (cost/quantity)) : null)

}

function handleNewPortfolio(name){
  Adapter.addPortfolio(name)
      .then(portfolio => {HTML.addPortfolioHtml(portfolio); return portfolio})
}

function handleSellStock(portfolio, stock){
  Adapter.getStockPrice(stock.ticker)
    .then(data => data["latestPrice"])
    .then(price => Adapter.changePortfolioCashBalance(portfolio, price * (-stock.quantity)))
    .then(() => Adapter.deleteStock(stock.id))
    .then(() => {
      stockDiv = document.getElementById(`sidebar-stock-${stock.id}`)
      stockDiv.parentNode.removeChild(stockDiv)
    })
    //should delete stock locally here
    .then(() => portfolio.createDataArrayAndRenderPieChart())


}
