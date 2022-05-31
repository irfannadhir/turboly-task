Rails.application.routes.draw do
  get 'login', to: 'login#index'
  
  get 'task', to: 'task#index'
  get 'get-task', to: 'task#get_tasks'
  post 'task', to: 'task#create'
  get 'task/:id', to: 'task#show'
  put 'task', to: 'task#update'
  delete 'task', to: 'task#destroy'

  post 'logout', to: 'login#logout'
  get 'login', to: 'login#index'
  post 'login', to: 'login#login'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end