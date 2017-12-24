let Portfolio = (function createPortfolioClass(){
  const all = []
  return class Portfolio{
    constructor(id, userId, name, stocks){
      this.id = id
      this.userId = userId
      this.name = name
      this.stocks = stocks
      all.push(this)
    }

    static all() {
      return [...all]
    }

    renderPieChart(dataForChart) {

      const chartDiv = document.getElementById("pie-chart-div")
      chartDiv.innerHTML += `<div id="piechart-${this.id}"></div>`
      // Load google charts
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      // Draw the chart and set the chart values
      let self = this
      function drawChart(dataForChart) {
        // console.log(self.dataForChart)
        let data = google.visualization.arrayToDataTable(self.dataForChart);

        // Optional; add a title and set the width and height of the chart
        let options = {'title':self.name, 'width':800, 'height':600, 'pieHole': 0.4};

        // Display the chart inside the <div> element with id="piechart"
        let chart = new google.visualization.PieChart(document.getElementById(`piechart-${self.id}`));
        // console.log(data)
        chart.draw(data, options);
      }
    }

    createDataArrayForPieChart(){
      // {label: 'Position', type: 'string'}, {label: 'Value', type: 'number'}
      this.dataForChart = [['Position', 'Value']]
      this.stocks.forEach((el) => {
        let stockTicker = Stock.findTickerById(el.stock_id)
        let quantity = el.quantity
        let stockPrice = Adapter.getStockPrice(stockTicker)
                          .then(data => data['Time Series (1min)'])
                          .then(obj => obj[Object.keys(obj).reduce(function(b, a){ return obj[a] > obj[b] ? a : b })]['4. close'])
                          .then((price) => {
                            (this.dataForChart).push([stockTicker, parseInt(price)*quantity])
                            return this.dataForChart
                          })
                          .then(dataForChart => this.renderPieChart(dataForChart))
      })
    }


  }
})()

function getPortfoliosFromBackend(){
  return Adapter.getPortfolios()
    .then(data => data.forEach((el) =>{
      new Portfolio(el.id, el.user_id, el.name, el.stockportfolios)
    }))
    .then(x => {Portfolio.all().forEach((el) => el.createDataArrayForPieChart())})

}

function renderSidebar(){
  let sidebarDiv = Document.getElementById("sidebar-div")
}
