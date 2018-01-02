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

    deleteStockById(id){
      let index = this.stocks.findIndex((stock) => stock.id === id)
      this.stocks.splice(index, 1)
    }

    // getStockPrices() {
    //   this.stocks.forEach((stock) => {
    //   Adapter.getStockPrice(stock.ticker)
    //   .then(data => data["latestPrice"])
    //
    //   })
    // }

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
      if (this.stocks.length){
        this.stocks.forEach((el) => {
          let stockTicker = el.ticker
          let quantity = el.quantity
          Adapter.getStockPrice(stockTicker)
            .then((price) => {(this.dataForChart).push([stockTicker, parseFloat(price).toFixed(2)*quantity]); return this.dataForChart})
            //dataForChart for some reason collapses outside of the promise. Can't figure it out
            //so rendering within the promise
            .then(dataForChart => {dataForChart.length > this.stocks.length + 1 ?  this.renderPieChart(dataForChart) : null})
          })
        }
        else{
          this.renderPieChart(this.dataForChart)
        }
      }

    renderSidebar(){
      document.getElementById(`sidebar-div-${this.id}`).innerHTML = null
      this.stocks.forEach((el) => {
        Adapter.getStockPrice(el.ticker)
            .then((price) => HTML.addStockToSidebar(this, el, price))
      })
    }

    refresh(){
        //add html
        HTML.addPortfolioHtml(this)
        //render sidebar
        this.renderSidebar()
        //render pie chart
        this.createDataArrayAndRenderPieChart()
    }

    addStockFormListener(){
      //add listener for new stocks
      let form = document.getElementById(`add-stock-form-${this.id}`)
      form.addEventListener('submit',(event) => {
        event.preventDefault()
        let ticker = document.getElementById(`add-stock-form-ticker-${this.id}`).value.toUpperCase().trim()
        let quantity = document.getElementById(`add-stock-form-quantity-${this.id}`).value
        form.reset()
        Adapter.getStockPrice(ticker)
          .then(price => price * quantity)
          .then(totalCost => handleNewStock(this, ticker, quantity, totalCost))
      })
    }


  }
})()
