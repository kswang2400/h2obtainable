
module Api
  class DataController < ApplicationController
    def index
      data = "DATA"    

      render json: data
    end
  end
end