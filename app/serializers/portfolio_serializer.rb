class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_many :stockportfolios
end
