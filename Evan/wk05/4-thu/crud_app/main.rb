
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative "db_config"
require_relative "models/item"
require_relative "models/comment"

def run_sql(sql)
  conn = conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)
  conn.close
  return result
end

get '/' do
  @items = Item.all
  erb :index
end

get '/list' do
  erb :list
end

get '/items/new' do
  erb :new
end

post '/items' do
  item = Item.new
  item.name = params[:name]
  item.price = params[:price]
  item.image_url = params[:image_url]
  item.save

  redirect '/'
end

delete '/items/:id' do
  item = Item.find( params[:id] )
  item.destroy

  redirect '/'
end

get '/items/:id' do
  @item = Item.find( params[:id] )
  @comments = @item.comments

  erb :item_details
end

get '/items/:id/edit' do
  result = run_sql("SELECT * FROM items WHERE id = #{ params[:id] }")
  @item = result.first

  erb :edit
end

put '/items/:id' do
  item = Item.find(params[:id])
  item.name = params[:name]
  item.price = params[:price]
  item.image_url = params[:image_url]
  item.save

  # redirect
  redirect "/items/#{ params[:id] }"
end

post '/comments' do
  comment = Comment.new
  comment.content = params[:content]
  comment.item_id = params[:item_id]
  comment.save

  redirect "/items/#{ params[:item_id] }"
end
