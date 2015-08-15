
module Api
  class UsagesController < ApplicationController
    def index
      data = Usage.all

      render json: data
    end
  end
end