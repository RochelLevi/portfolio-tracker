document.addEventListener("DOMContentLoaded",() => {
  getStocksFromBackend()
    .then(getPortfoliosFromBackend)
    .then(addEventListenersToStockForm)

    function addEventListenersToStockForm(){
      Portfolio.all().forEach((portfolio) => {
        document.getElementById(`add-stock-form-${portfolio.id}`).addEventListener('submit',(event) => {

          event.preventDefault()
          ticker = document.getElementById(`add-stock-form-ticker-${portfolio.id}`).value
          quantity = document.getElementById(`add-stock-form-quantity-${portfolio.id}`).value
        handleNewStock(portfolio, ticker, quantity)
      })
    })
    }



})
