document.addEventListener("DOMContentLoaded",() => {
  getStocksFromBackend()
    .then(getPortfoliosFromBackend)
    .then(renderSidebar)

})
