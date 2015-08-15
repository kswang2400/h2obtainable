
module Api
  class UsagesController < ApplicationController
    def index
      @data = Usage.all

      render "index.json.jbuilder"
    end
  end
end