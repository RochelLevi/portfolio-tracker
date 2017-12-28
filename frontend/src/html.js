class HTML{
  static addPortfolioHtml(el){
    let body = document.getElementById('body-here')
    body.innerHTML += `<div class="jumbotron">
      <div class="container">
        <h1 > ${el.name} </h1>
        <h3 id='portfolio-value-${el.id}'> </h3>
        <!-- add stock form -->
        <div class="row">
          <h3>Buy Stock</h3>
          <form id="add-stock-form-${el.id}" class="" action="index.html" method="post">
            <label for="add-stock-form-ticker">Ticker: </label>
            <input id="add-stock-form-ticker-${el.id}" type="text" name="" value=""><br>
            <label for="add-stock-form-quantity">Quantity</label>
            <input id="add-stock-form-quantity-${el.id}" type="text" name="" value=""><br>
            <input type="submit" value="Submit">
          </form>
        </div>


        <div class="row">
          <!-- sidebar list of positions -->
          <div class="col-md-2" id="sidebar-div-${el.id}">

          </div>

          <!-- portfolio pie chart -->
          <div class="col-md-6" id="pie-chart-div-${el.id}">

          </div>
        </div>
      </div>
    </div>`
  }

  static addStockToSidebar(id, el, price){
    let sidebarDiv = document.getElementById(`sidebar-div-${id}`)
    sidebarDiv.innerHTML += `<div class="">
        <h3>${el.ticker}</h3>
        <p>${price}</p>
        <p>Quantity: ${el.quantity}</p>
        <button type="button" name="button" id="sell-portfolio-${id}-stockportfolio-${el.id}">Sell All ${el.ticker} Shares</button>
      </div>`
    document.getElementById(`sell-portfolio-${id}-stockportfolio-${el.id}`).addEventListener('click',(e) => {
      e.preventDefault()
      handleSellStock(id, el)
    })
  }
}
