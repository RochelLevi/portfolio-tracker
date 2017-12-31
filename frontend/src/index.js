document.addEventListener("DOMContentLoaded",() => {

  const newPortfolioForm = document.getElementById("add-portfolio")

  Adapter.getPortfolios()
    .then(data => data.forEach((el) =>{
        let portfolio = new Portfolio(el.id, el.user_id, el.name, el.stockportfolios, el.cash_balance)
        handlePortfolioRefresh(portfolio)
      }))
    .then(() => Portfolio.all().forEach((portfolio) => handleAddStockFormListener(portfolio)))

  newPortfolioForm.addEventListener('submit', (event) => {
    event.preventDefault()
    name = document.getElementById(`add-portfolio-name`).value
    newPortfolioForm.reset()
    Adapter.addPortfolio(name)
      .then(el => new Portfolio(el.id, el.user_id, el.name, el.stockportfolios, el.cash_balance))
      .then(portfolio => {handlePortfolioRefresh(portfolio); return portfolio})
      .then((portfolio) => handleAddStockFormListener(portfolio))
  })

})
