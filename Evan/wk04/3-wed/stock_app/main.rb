require 'sinatra'
require 'stock_quote'

get '/index' do
  erb(:index)
end

get '/stock' do
  @ticker = params[:ticker]
  @stock = StockQuote::Stock.quote(params[:ticker])
  @latest = "class='up'"

  # if (@stock.latest_price < @stock.open)
  #   @latest = "class='down'"
  # end

  erb(:info)
end
