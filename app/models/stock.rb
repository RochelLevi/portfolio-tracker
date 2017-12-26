class Stock < ApplicationRecord

  has_many :portfolios, through: :stockportfolios


end
