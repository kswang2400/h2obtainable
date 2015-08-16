
module Api
  class ProductsController < ApplicationController
    def index
      @products = Product.all 

      render "index.json.jbuilder"
    end
  end
end
