Rails.application.routes.draw do
  get 'login', to: 'login#index'
  
  get 'task', to: 'task#index'
  get 'get-task', to: 'task#get_tasks'
  post 'task', to: 'task#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end