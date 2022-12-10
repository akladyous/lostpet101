Rails.application.routes.draw do
  resources :pets
  resources :reports
  namespace :users, defaults: {format: :json} do
    post 'signin', to: 'session#create'
    delete 'signout', to: 'session#destroy'

    post 'signup', to: 'registration#create'
    delete 'cancel', to: 'registration#destroy'

    patch 'update_password', to: 'edit_password#update'
    post  'reset_password',  to: 'reset_password#create'
    patch 'reset_password',  to: 'reset_password#update'
  end
end
