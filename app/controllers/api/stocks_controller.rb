class Api::StocksController < ApplicationController

  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def update
    @stock = Stock.find(params[:id])

    @stock.update(stock_params)
    if @stock.save
      render json: @stock
    else
      render json: {errors: @stock.errors.full_messages}, status: 422
    end
  end

  private
    def stock_params
      params.permit(:ticker)
    end

end
