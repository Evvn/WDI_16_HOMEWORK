require 'sinatra'
require 'stock_quote'

get '/index' do
  erb(:index)
end

get '/stock' do
  @ticker = params[:ticker]
  @stock = StockQuote::Stock.quote(params[:ticker])

  erb(:info)
end
