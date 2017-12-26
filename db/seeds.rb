# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rochel = User.create(f_name: "rochel", l_name: "levi", email: "rochel@gmail.com")

pharma = Portfolio.create(name: "Pharma Portfolio", user_id: rochel.id)
tech = Portfolio.create(name: "Tech Fund", user_id: rochel.id)
blue_chip = Portfolio.create(name: "Blue Chip Stocks", user_id: rochel.id)

gild = Stock.create(ticker: 'gild')
wsm = Stock.create(ticker: 'wsm')
wdc = Stock.create(ticker: 'wdc')
sci = Stock.create(ticker: 'sci')
fxb = Stock.create(ticker: 'fxb')
grpn = Stock.create(ticker: 'grpn')
vz = Stock.create(ticker: 'vz')
amgn = Stock.create(ticker: 'amgn')
teva = Stock.create(ticker: 'teva')

Stockportfolio.create(stock_id: gild.id, portfolio_id: pharma.id, quantity: 5, ticker: 'GILD')
Stockportfolio.create(stock_id: vz.id, portfolio_id: blue_chip.id, quantity: 7, ticker: 'VZ')
Stockportfolio.create(stock_id: wsm.id, portfolio_id: blue_chip.id, quantity: 25, ticker: 'WSM')
Stockportfolio.create(stock_id: amgn.id, portfolio_id: pharma.id, quantity: 11, ticker: 'AMGN')
Stockportfolio.create(stock_id: grpn.id, portfolio_id: tech.id, quantity: 34, ticker: 'GRPN')
Stockportfolio.create(stock_id: teva.id, portfolio_id: pharma.id, quantity: 72, ticker: 'TEVA')
