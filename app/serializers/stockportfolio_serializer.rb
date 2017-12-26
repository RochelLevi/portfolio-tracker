class StockportfolioSerializer < ActiveModel::Serializer
  attributes :id, :stock_id, :quantity, :ticker
end
