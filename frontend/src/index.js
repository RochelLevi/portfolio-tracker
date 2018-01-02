document.addEventListener("DOMContentLoaded",() => {

  const newPortfolioForm = document.getElementById("add-portfolio")

  Adapter.getPortfolios()
    .then(data => data.forEach((el) =>{
        let portfolio = new Portfolio(el.id, el.user_id, el.name, el.stockportfolios, el.cash_balance)
        portfolio.refresh()
      }))
    .then(() => Portfolio.all().forEach((portfolio) => portfolio.addStockFormListener()))

  newPortfolioForm.addEventListener('submit', (event) => {
    event.preventDefault()
    name = document.getElementById(`add-portfolio-name`).value
    newPortfolioForm.reset()
    handleNewPortfolio(name)
  })

})
