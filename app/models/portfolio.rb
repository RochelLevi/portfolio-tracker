class Portfolio < ApplicationRecord
  has_many :stockportfolios
  has_many :stocks, through: :stockportfolios

  validates :name, presence: true
end
