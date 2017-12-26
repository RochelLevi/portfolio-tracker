class AddCashBalanceToPortfolios < ActiveRecord::Migration[5.1]
  def change
    add_column :portfolios, :cash_balance, :integer, default: 100000
  end
end
