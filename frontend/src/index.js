document.addEventListener("DOMContentLoaded",() => {

  const newPortfolioForm = document.getElementById("add-portfolio")

  Adapter.getPortfolios()
    .then(data => data.forEach((el) =>{
        new Portfolio(el.id, el.user_id, el.name, el.stockportfolios, el.cash_balance)
      }))
    .then(() => {Portfolio.all().forEach((el) => {
      HTML.addPortfolioHtml(el)
      el.createDataArrayAndRenderPieChart()
      el.renderSidebar(el.id)
      
    })})
    .then(addEventListenersToStockForm)

  newPortfolioForm.addEventListener('submit', (event) => {
    event.preventDefault()
    name = document.getElementById(`add-portfolio-name`).value
    handleNewPortfolio(name)
    newPortfolioForm.reset()
  })

})
