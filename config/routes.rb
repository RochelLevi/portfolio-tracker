Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :portfolio, only: [:index, :update, :show, :new, :create, :destroy]
    resources :stocks, only: [:index, :show, :new, :create, :destroy]
    resources :stockportfolios, only: [:index, :show, :new, :create, :destroy]
  end


end
