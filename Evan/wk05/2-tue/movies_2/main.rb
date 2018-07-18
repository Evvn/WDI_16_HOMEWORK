require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'
require "pry"

get '/' do
  erb :index
end

get '/movie_search' do
  @movie_name = params[:movie_name]
  @movie = HTTParty.get("http://omdbapi.com/?t=#{ @movie_name.downcase }&apikey=2f6435d9")
  @search = HTTParty.get("http://omdbapi.com/?s=#{ @movie_name.downcase }&apikey=2f6435d9")

  if @search['Response'] == 'False'
    erb :movie_info
  elsif @search['Search'].length == 1
    erb :movie_info
  else
    erb :search
  end
end

get '/movie_info' do
  @movie_name = params[:movie_name]
  @movie = HTTParty.get("http://omdbapi.com/?t=#{ @movie_name.downcase }&apikey=2f6435d9")
  erb :movie_info
end
