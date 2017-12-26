class AddTickerToStockportfolios < ActiveRecord::Migration[5.1]
  def change
    add_column :stockportfolios, :ticker, :text
  end
end
