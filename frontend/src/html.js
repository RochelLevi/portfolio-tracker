class HTML{
  static addPortfolioHtml(id){
    let body = document.getElementById('body-here')
    body.innerHTML += `<div class="jumbotron">
      <div class="container">

        <!-- add stock form -->
        <div class="row">
          <form id="add-stock-form-${id}" class="" action="index.html" method="post">
            <label for="add-stock-form-ticker">Ticker: </label>
            <input id="add-stock-form-ticker-${id}" type="text" name="" value=""><br>
            <label for="add-stock-form-quantity">Quantity</label>
            <input id="add-stock-form-quantity-${id}" type="text" name="" value="">
            <input type="submit" value="Submit">
          </form>
        </div>



        <div class="row">
          <!-- sidebar list of positions -->
          <div class="col-md-3" id="sidebar-div-${id}">

          </div>

          <!-- portfolio pie chart -->
          <div class="col-md-9" id="pie-chart-div-${id}">

          </div>
        </div>
      </div>
    </div>`
  }

  static addSidebarToPortfolio(id, el, price){
    let sidebarDiv = document.getElementById(`sidebar-div-${id}`)
    sidebarDiv.innerHTML += `<div class="">
        <h3>${el.ticker}</h3>
        <p>${price}</p>
        <p>Quantity: ${el.quantity}</p>
      </div>`
  }
}
