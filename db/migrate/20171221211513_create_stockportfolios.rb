class CreateStockportfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :stockportfolios do |t|
      t.integer :stock_id
      t.integer :portfolio_id

      t.timestamps
    end
  end
end
