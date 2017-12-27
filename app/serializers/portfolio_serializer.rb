class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :cash_balance
  has_many :stockportfolios
end
