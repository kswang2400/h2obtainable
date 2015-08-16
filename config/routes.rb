
Rails.application.routes.draw do
  root to: "static_pages#index"

  get "developers", to: "static_pages#developers"

  namespace :api, defaults: { format: :json } do
    resources :usages,          only: [:index, :show]
    resources :products,        only: [:index]

    get "list_account_ids", to: "usages#account_ids"
    get "list_all_usages", to: "usages#all"
  end
end


# 54f962a1-bd97-593d-b502-2079c72d922b