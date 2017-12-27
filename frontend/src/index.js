document.addEventListener("DOMContentLoaded",() => {

  document.getElementById("add-portfolio").addEventListener('submit',(event) => {
    event.preventDefault()
    name = document.getElementById(`add-portfolio-name`).value
    handleNewPortfolio(name)
    document.getElementById("add-portfolio").reset()
  })

  getPortfoliosFromBackend()
    .then(() => {Portfolio.all().forEach((el) => {
      HTML.addPortfolioHtml(el)
      // el.getStockPrices()
      el.createDataArrayAndRenderPieChart()
      el.renderSidebar(el.id)

    })})
    // .then(() => {Portfolio.all().forEach((el) => el.renderPieChart(el.dataForChart, el.id))})
    .then(addEventListenersToStockForm)





})
