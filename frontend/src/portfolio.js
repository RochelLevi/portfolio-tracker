let Portfolio = (function createPortfolioClass(){
  const all = []
  return class Portfolio{
    constructor(id, userId, name, stocks, cashBalance){
      this.id = id
      this.userId = userId
      this.name = name
      this.cashBalance = cashBalance
      this.stocks = stocks
      all.push(this)
    }

    static all() {
      return [...all]
    }

    getStockPrices() {
      this.stocks.forEach((stock) => {
      Adapter.getStockPrice(stock.ticker)
      .then(data => data["latestPrice"])
      // .then(data => data['Time Series (1min)'])
      // .then(obj => obj[Object.keys(obj).reduce(function(b, a){ return obj[a] > obj[b] ? a : b })]['4. close'])
        // console.log(stock.price)
      })
    }

    renderPieChart(dataForChart) {
      const valueEl = document.getElementById(`portfolio-value-${this.id}`)
      let value = dataForChart.slice(1).reduce( (prev, curr) => prev + parseInt(curr[1]), 0);
      valueEl.innerHTML = `Portfolio Value: ${value}`

      const chartDiv = document.getElementById(`pie-chart-div-${this.id}`)
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
        let options = {'title':self.name, 'width':600, 'height':450, 'pieHole': 0.3, 'titleTextStyle': {'fontSize': 30}};

        // Display the chart inside the <div> element with id="piechart"
        let chart = new google.visualization.PieChart(document.getElementById(`piechart-${self.id}`));

        chart.draw(data, options);
      }
    }

    createDataArrayAndRenderPieChart(){
      this.dataForChart = [['Position', 'Value'], ['Cash', this.cashBalance]]
      this.stocks.forEach((el) => {
        let stockTicker = el.ticker
        let quantity = el.quantity
        Adapter.getStockPrice(stockTicker)
          .then(data => data["latestPrice"])
          .then((price) => {(this.dataForChart).push([stockTicker, parseFloat(price).toFixed(2)*quantity]); return this.dataForChart})
          //dataForChart for some reason collapses outside of the promise. Can't figure it out
          //so rendering within the promise
          // .then(dataForChart => this.renderPieChart(dataForChart))
          .then(dataForChart => {dataForChart.length > this.stocks.length + 1 ?  this.renderPieChart(dataForChart) : null})
          // console.log(`dataForChartLength ${dataForChart.length}`); console.log(`thisStocksLength  ${this.stocks.length}`);
        })
        return 1
      }


    renderSidebar(){
      let id = this.id
      this.stocks.forEach((el) => {
        Adapter.getStockPrice(el.ticker)
            .then(data => data["latestPrice"])
            .then((price) => HTML.addStockToSidebar(id, el, price))
      })
    }

  }
})()
