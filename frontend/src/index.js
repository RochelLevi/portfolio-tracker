document.addEventListener("DOMContentLoaded",() => {

  getPortfoliosFromBackend()
    .then(() => {Portfolio.all().forEach((el) => {
      HTML.addPortfolioHtml(el.id)
      el.createDataArrayAndRenderPieChart()
      el.renderSidebar(el.id)
    })})
    .then(addEventListenersToStockForm)





})
