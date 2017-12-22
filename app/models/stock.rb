class Stock < ApplicationRecord
  has_many :stockportfolios
  has_many :portfolios, through: :stockportfolios


end
