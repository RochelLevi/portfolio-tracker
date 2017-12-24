class StockportfolioSerializer < ActiveModel::Serializer
  attributes :id, :stock_id, :quantity
  belongs_to :stock
end
