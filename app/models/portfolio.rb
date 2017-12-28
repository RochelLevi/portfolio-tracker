class Portfolio < ApplicationRecord
  has_many :stockportfolios
  has_many :stocks, through: :stockportfolios

  validates :name, presence: true
  validates :cash_balance, numericality: { greater_than_or_equal_to: 0}
end
