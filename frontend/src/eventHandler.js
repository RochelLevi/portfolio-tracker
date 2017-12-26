function handleNewStock(portfolio, ticker, quantity){
  Adapter.addStockToPortfolio(portfolio, ticker, quantity)
    .then(data => portfolio.stocks.push(data))
    .then(() => portfolio.createDataArrayAndRenderPieChart())
    .then(() => document.getElementById(`sidebar-div-${portfolio.id}`).innerHTML = null)
    .then(() => portfolio.renderSidebar(portfolio.id))
}
