class Api::StockportfoliosController < ApplicationController

  def create
    @stockportfolio = Stockportfolio.create(stockportfolio_params)
    render json: @stockportfolio
  end

  def destroy
    @stockportfolio = Stockportfolio.find(params[:id])
    @stockportfolio.destroy
  end


  private
    def stockportfolio_params
      params.permit(:portfolio_id, :quantity, :ticker)
    end
end
