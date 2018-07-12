
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/:num_bottles' do
  @bottles = params[:num_bottles].to_i
  erb :remove
end
