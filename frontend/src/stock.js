// not using. eventually maybe will use to validate tickers
// let Stock = (function createStockClass(){
//   const all = []
//   return class Stock{
//     constructor(id, ticker, lastPrice){
//       this.id = id
//       this.ticker = ticker
//       this.lastPrice = lastPrice
//       all.push(this)
//     }
//
//     static all() {
//       return [...all]
//     }
//
//     static findTickerById(id) {
//       const match = all.find((stock) =>{
//         return stock.id === id
//       })
//       return match.ticker
//     }
//   }
// })()
//
// function getStocksFromBackend(){
//   return Adapter.getStocks()
//     .then(data => data.forEach((el) =>{
//       new Stock(el.id, el.ticker)
//     }))
// }
