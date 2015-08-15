
Rails.application.routes.draw do
  root to: "static_pages#index"

  namespace :api, defaults: { format: :json } do
    resources :usages,          only: [:index, :show]
    resources :hourly_usages,   only: [:index, :show]

    get "list_account_ids", to: "usages#account_ids"
  end
end
