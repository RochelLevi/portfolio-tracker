class AddColumnToStockPortfolio < ActiveRecord::Migration[5.1]
  def change
    add_column :stockportfolios, :quantity, :integer
  end
end
