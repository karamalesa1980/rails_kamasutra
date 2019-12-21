Rails.application.routes.draw do
  root 'pages#index'
  get 'users_json', to: 'pages#users_json'
  get 'users', to: 'pages#index'
  get 'dialogs', to: 'pages#index'
  get 'profile', to: 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
