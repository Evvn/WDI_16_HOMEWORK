Rails.application.routes.draw do
  # resources :bikes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #redirect to index
  get '/', to: 'bikes#index'

  # create
  get '/bikes/new', to: 'bikes#new'
  post '/bikes', to: 'bikes#create'

  # read
  get '/bikes', to: 'bikes#index'
  get '/bikes/:id', to: 'bikes#show'

  # update
  get '/bikes/:id/edit', to: 'bikes#edit'
  put '/bikes/:id', to: 'bikes#update'

  # destroy
  delete '/bikes/:id', to: 'bikes#destroy'
  # controller name & method 'name#method'
end
