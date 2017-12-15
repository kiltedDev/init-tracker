Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'init_tracker', to: 'init_tracker#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
