Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :portfolio, only: [:index, :show, :new, :create, :delete] do
      resources :stocks, only: [:index, :show, :new, :create, :delete]
    end
  end


end