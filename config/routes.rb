Rails.application.routes.draw do
  

  resources :users, only: [:create]
  # resources :admins
  # resources :buyers
  # # Routing logic: fallback requests for React Router.
  # # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/signup_buyer", to: "buyers#create"
  get "/me_buyer", to: "buyers#show"
  post "/login_buyer", to: "sessions#create"
  delete "/logout_buyer", to: "sessions#destroy"

  post "/signup_admin", to: "admins#create"
  get "/me_admin", to: "admins#show"
<<<<<<< HEAD
  post "/login_admin", to: "sessions_admin#create"
  delete "/logout_admin", to: "sessions_admin#destroy"
=======
  post "/login_admin", to: "sessions#create"
  delete "/logout_admin", to: "sessions#destroy"

  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

>>>>>>> origin
end

