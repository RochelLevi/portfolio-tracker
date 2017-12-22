class Stockportfolio < ApplicationRecord
  belongs_to :stock
  belongs_to :portfolio
end
