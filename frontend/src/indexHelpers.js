function addEventListenersToStockForm(){
  Portfolio.all().forEach((portfolio) => {
    let form = document.getElementById(`add-stock-form-${portfolio.id}`)
    form.addEventListener('submit',(event) => {
      event.preventDefault()
      ticker = document.getElementById(`add-stock-form-ticker-${portfolio.id}`).value.toUpperCase()
      quantity = document.getElementById(`add-stock-form-quantity-${portfolio.id}`).value
      cost = Adapter.getStockPrice(ticker)
        .then(data => data["latestPrice"])
        .then(price => price * quantity)
        .then(cost => handleNewStock(portfolio, ticker, quantity, cost))
      form.reset()
    })
  })
}
