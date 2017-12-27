class Stockportfolio < ApplicationRecord
  belongs_to :portfolio

  validates :ticker, presence: true
  validates :quantity, presence: true
end
