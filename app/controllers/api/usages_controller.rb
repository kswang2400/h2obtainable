
module Api
  class UsagesController < ApplicationController
    def all
      data = Usage.all

      render json: data
    end

    def index
      @data = Usage.where(account_id: params[:account_id])

      render "index.json.jbuilder"
    end

    def show
      @data = Usage.where(account_id: params[:id])

      render "index.json.jbuilder"
    end

    def account_ids
      @account_ids = Usage.select(:account_id).distinct

      # render json: @account_ids
      render "account_ids.json.jbuilder"
    end
  end
end