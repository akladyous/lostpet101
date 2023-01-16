Rails.application.routes.draw do

  # root 'home#index'
  get "*path", to: "home#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post :feedback, to: "feedback#create"

  # resources :likes
  resources :report_requests
  resources :user_profiles
  resources :user_addresses
  resources :reports do
    post :search, on: :collection
    # resources :report_requests, as: 'request'
  end
  resources :pets do
    resource :likes, only: %i[show create destroy]
  end


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
# listings_posts GET  /listings/posts(.:format) listings/posts#index
