
module Api
  class UsagesController < ApplicationController
    def index
      @data = Usage.all

      render "index.json.jbuilder"
    end

    def show
      @data = Usage.where(account_id: params[:id])

      render "show.json.jbuilder"
    end

    def account_ids
      @account_ids = Usage.select(:account_id).distinct

      render json: @account_ids
    end
  end
end