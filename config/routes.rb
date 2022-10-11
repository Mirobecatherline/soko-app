Rails.application.routes.draw do
  
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
  post "/login_admin", to: "sessions_admin#create"
  delete "/logout_admin", to: "sessions_admin#destroy"
end
