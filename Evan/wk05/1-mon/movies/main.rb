require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :index
end

get '/movie_get' do
  @movie_name = params[:movie_name]
  @movie = HTTParty.get("http://omdbapi.com/?t=#{ @movie_name.downcase }&apikey=2f6435d9")
  erb :movie_info
end
